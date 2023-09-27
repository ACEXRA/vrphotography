import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const CustomToast = ({ message, setShow, show }) => {
  return (
    <ToastContainer
      style={{
        position: "fixed",
        bottom: "5rem",
        right: "5rem",
      }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header style={{ background: "#ffc916" }}>
          <strong className="me-auto">{message}</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
};
export default CustomToast;
