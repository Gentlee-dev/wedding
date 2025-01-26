import styles from './imageGallery.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';
import ImageViewer from '../imageViewer/imageViewer';
import { useState } from 'react';

const cx = classNames.bind(styles);

const ImageGallery = ({ images }: { images: string[] }) => {
  const [seletedIdx, setSeletedIdx] = useState(-1);
  const isOpen = seletedIdx > -1;
  const handleClose = () => {
    setSeletedIdx(-1);
  };
  return (
    <>
      <Section className={cx('container')} title="갤러리">
        <ul className={cx('wrap-images')}>
          {images.map((image, idx) => {
            return (
              <li
                key={image}
                className={cx('wrap-image')}
                onClick={() => setSeletedIdx(idx)}
              >
                <img src={image} alt="사진" />
              </li>
            );
          })}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        handleClose={handleClose}
        seletedIdx={seletedIdx}
      />
    </>
  );
};

export default ImageGallery;
