import styles from './heading.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';
import { format, parseISO, getDay } from 'date-fns';

const cx = classNames.bind(styles);

const DAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date);
  console.log(weddingDate);
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  );
};

export default Heading;
