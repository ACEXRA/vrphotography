import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const CustomToast = ({ message, setShow, show }) => {
  return (
    <ToastContainer
      style={{
        position: "fixed",
        bottom: "100px",
        right: "50px",
      }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header style={{ background: "#ffc916" }}>
          <strong className="me-auto">{message} successfully</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
};
export default CustomToast;
