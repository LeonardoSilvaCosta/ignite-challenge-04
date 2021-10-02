import ReactModal from 'react-modal';

import { useState, useEffect, ReactElement } from 'react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactElement ;
}

export function Modal(props : ModalProps) {

  const { isOpen } = props;

  const [modalStatusState, setModalStatus] = useState<boolean>(isOpen);

  useEffect(() => {

    const { isOpen } = props;

    console.log(props);
    setModalStatus(isOpen)
  }, [isOpen]); 

    const { children, setIsOpen } = props;
    const modalStatus = modalStatusState;

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  }