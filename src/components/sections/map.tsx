import { useEffect, useRef } from 'react';
import styles from './map.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';
import { Location } from '@models/wedding';

declare global {
  interface Window {
    kakao: any;
  }
}

const cx = classNames.bind(styles);

const Map = ({ location }: { location: Location }) => {
  const mapContainer = useRef(null);

  const loadKAKOMap = () => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        );

        const options = {
          center: position,
          level: 3,
        };

        const marker = new window.kakao.maps.Marker({
          position,
        });

        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  };

  useEffect(() => {
    loadKAKOMap();
  }, [location]);

  return (
    <Section
      title={
        <div className={cx('wrap-haader')}>
          <span className={cx('txt-title')}>오시는 길</span>
          <span>{location.name}</span>
          <span>{location.address}</span>
        </div>
      }
      className={cx('container')}
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          href={location.link}
          target="_blank"
          className={cx('btn-find')}
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  );
};

const WayToCome = ({
  label,
  list,
}: {
  label: React.ReactNode;
  list: string[];
}) => {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Map;
