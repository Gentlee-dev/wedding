import styles from './modal.module.scss';
import classNames from 'classnames/bind';
import Dimmed from './dimmed';

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  rightBtnLabel?: string;
  onClickRightBtn: () => void;
  leftBtnLabel?: string;
  onClickLeftBtn: () => void;
}

const Modal = ({
  body,
  onClickLeftBtn,
  onClickRightBtn,
  open,
  title,
  leftBtnLabel = '닫기',
  rightBtnLabel = '확인',
}: ModalProps) => {
  if (!open) return null;
  return (
    <Dimmed>
      <div className={cx('wrap-model')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-contents')}>
            {title === null ? null : (
              <div className={cx('txt-title')}>{title}</div>
            )}
            {body}
          </div>
          <div className={cx('wrap-btns')}>
            <button onClick={onClickLeftBtn}>{leftBtnLabel}</button>
            <button onClick={onClickRightBtn}>{rightBtnLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  );
};

export default Modal;
