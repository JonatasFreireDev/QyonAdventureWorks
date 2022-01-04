import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from "react";
import MyModal from "../components/Modal";

export interface Modal {
  isOpend: boolean;
}

interface ModalContextData {
  openModal(): void;
  closeModal(): void;
  toggleModal(): void;
  setContentModal(contentRecive: ReactNode): void;
  statusModal: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState<Modal>({ isOpend: false });
  const [content, setContent] = useState<ReactNode>();

  const openModal = useCallback(() => {
    setStatus({ isOpend: true });
  }, []);

  const closeModal = useCallback(() => {
    setStatus({ isOpend: false });
  }, []);

  const toggleModal = useCallback(() => {
    setStatus({ isOpend: !status.isOpend });
  }, []);

  const setContentModal = useCallback((contentRecive: ReactNode) => {
    setContent(contentRecive);
    openModal();
  }, []);

  const statusModal = status.isOpend;

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        toggleModal,
        statusModal,
        setContentModal,
      }}
    >
      {children}
      <MyModal>{content}</MyModal>
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}

export { ModalProvider, useModal };
