import "./LoadingOverlay.css";

const LoadingSpinner = ({ size = 24 }) => {
  return (
    <div
      className="spinner"
      style={{ width: size, height: size }}
    />
  );
};

export default LoadingSpinner;
