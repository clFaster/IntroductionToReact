import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

const Modal = {
  Background: styled.div<ModalProps>`
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
  `,

  Container: styled.div`
    z-index: 101;

    position: absolute;
    top: 30%;
    left: 33%;

    padding: 0.75rem;
    width: 34%;
    height: auto;
    background: #3e6259;

    border-radius:10px;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    -webkit-box-shadow:0px 15px 50px 1px #5B82662F ;
    -moz-box-shadow:0px 15px 50px 1px #5B82662F ;
    box-shadow:0px 15px 50px 1px #5B82662F ;
  `,
};

export default Modal;
