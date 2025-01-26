import styles from './section.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Section = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}) => {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  );
};

export default Section;
