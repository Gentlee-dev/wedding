import styles from './video.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
};

export default Video;
