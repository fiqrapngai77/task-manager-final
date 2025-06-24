import React from "react";

type LoadingOverlayProps = {
  isLoading: boolean;
};

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">Loading...</div>
    </div>
  );
};

export default LoadingOverlay;
