import styles from './imageViewer.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.css';
import 'swiper/css';
import Dimmed from '../shared/dimmed';

const cx = classNames.bind(styles);

const ImageViewer = ({
  images,
  seletedIdx,
  handleClose,
}: {
  images: string[];
  seletedIdx: number;
  handleClose: () => void;
}) => {
  if (seletedIdx === -1) return null;
  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={handleClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={seletedIdx}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img src={image} alt="확대이미지" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Dimmed>
  );
};

export default ImageViewer;

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void;
  className: string;
}) => {
  return (
    <svg
      className={className}
      id="Icons"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <defs></defs>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
    </svg>
  );
};
