import styles from './modal.module.scss';
import classNames from 'classnames/bind';
import Modal from '@shared/modal';
import { createContext, useContext, ComponentProps, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface ModalContextValue {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValues = {
  open: false,
  body: null,
  onClickRightBtn: () => {},
  onClickLeftBtn: () => {},
};

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const $portalRoot = document.getElementById('root-portal');

  const [modalState, setModalState] = useState<ModalProps>(defaultValues);

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };
  const close = () => {
    setModalState(defaultValues);
  };

  const values = {
    open,
    close,
  };

  return (
    <Context.Provider value={values}>
      {children}
      {$portalRoot
        ? createPortal(<Modal {...modalState} />, $portalRoot)
        : null}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const valuse = useContext(Context);
  if (!valuse) {
    throw new Error('ModalContext안에서 사용해주세요');
  }

  return valuse;
};
