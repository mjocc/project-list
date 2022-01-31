import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Toast as BSToast, ToastContainer } from 'react-bootstrap';

interface ToastProps {
  text: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Toast: FC<ToastProps> = ({ text, show, setShow }) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2500);
    }
  }, [show, setShow]);
  return (
    <ToastContainer className="p-3 mb-4" position="bottom-center">
      <BSToast show={show} bg="success" onClose={() => setShow(false)}>
        <BSToast.Header>
          <strong className="me-auto">Message</strong>
        </BSToast.Header>
        <BSToast.Body>{text}</BSToast.Body>
      </BSToast>
    </ToastContainer>
  );
};

export default Toast;
