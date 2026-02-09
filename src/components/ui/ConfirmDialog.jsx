import "./ConfirmDialog.css";

const ConfirmDialog = ({ open, title, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <h3>{title}</h3>
        <p>{message}</p>

        <div className="confirm-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Huỷ
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
