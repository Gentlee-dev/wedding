import styles from './dimmed.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Dimmed = ({ children }: { children: React.ReactNode }) => {
  return <section className={cx('dimmed')}>{children}</section>;
};

export default Dimmed;
