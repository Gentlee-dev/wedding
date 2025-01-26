import styles from './calendar.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/style.css';

const cx = classNames.bind(styles);
const css = `
  .rdp-nav {
    display: none;
  }  
  .rdp-day {
    cursor: default;
  }  
  .rdp-weekday {
    font-size: 14px;
    font-weight: bold;
  }  
  .rdp-selected {
    background-color: var(--red);
    border-radius: 100%;
  }  
  .rdp-selected .rdp-day_button{
    border: none;
    font-weight: bold;
    color: white;
  }  
`;

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date);

  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  );
};

export default Calendar;
