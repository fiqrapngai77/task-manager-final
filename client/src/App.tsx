import { createContext, useEffect, useState } from "react";
import Tabs from "./components/Tabs/Tabs";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import type { Task } from "./types/Task";
import Modal from "./components/Modal/Modal";
import { getTasks } from "./api/getTasks";
import { addTaskApi } from "./api/addTask";
import { deleteTaskApi } from "./api/deleteTask";
import { updateTaskApi } from "./api/updateTask";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";

interface ContextProps {
  tasks: Task[];
  currentTaskId: number | null;
  openModal: () => void;
  addTask: (task: Omit<Task, "id">) => void;
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
  setCurrentTask: (id: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<ContextProps | null>(null);

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      getTasks().then((data) => setTasks(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTaskId(null);
  };

  const setCurrentTask = (id: number) => {
    setCurrentTaskId(id);
    openModal();
  };

  const addTask = async (task: Omit<Task, "id">) => {
    setIsLoading(true);
    const newTask: Omit<Task, "id"> = {
      ...task,
      updated_at: new Date().toString(),
    };
    const { id } = await addTaskApi(newTask);
    setTasks((prev) => [...prev, { ...newTask, id }]);
    setIsLoading(false);
  };

  const deleteTask = async (id: number) => {
    setIsLoading(true);
    await deleteTaskApi(id);
    const filteredTasks = tasks.filter((t) => t.id != id);
    setTasks(filteredTasks);
    setIsLoading(false);
  };

  const updateTask = async (task: Task) => {
    setIsLoading(true);
    const updatedTask = await updateTaskApi({
      ...task,
      updated_at: new Date().toString(),
    });
    const id = task.id;
    const updatedTasks = tasks.map((t) => (t.id === id ? updatedTask : t));
    setTasks(updatedTasks);
    setIsLoading(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        currentTaskId,
        addTask,
        deleteTask,
        updateTask,
        openModal,
        setCurrentTask,
      }}
    >
      <LoadingOverlay isLoading={isLoading} />
      <div className="relative">
        <div className="w-full h-[100vh] flex flex-wrap place-content-center">
          <Tabs />
        </div>
        <FloatingButton
          className="fixed bottom-4 right-4"
          text="Add Task"
          handler={openModal}
        />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
