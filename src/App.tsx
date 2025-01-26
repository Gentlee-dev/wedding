import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import FullScreenMessage from '@components/shared/fullscreenMessage';
import Heading from '@components/sections/heading';
import Video from '@components/sections/video';
import { Wedding } from './models/wedding';
import ImageGallery from './components/sections/imageGallery';
import Intro from './components/sections/intro';
import Invitation from './components/sections/invitation';
import Calendar from './components/sections/calendar';
import Map from './components/sections/map';
import Contact from './components/sections/contact';

const cx = classNames.bind(styles);

const App = () => {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const data = await fetch('http://localhost:8888/wedding');
      if (!data.ok) {
        throw new Error('청접장 데이터를 불러오지 못했습니다.');
      }
      const res = await data.json();
      setWedding(res);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return <FullScreenMessage type="loading" />;
  if (isError) return <FullScreenMessage type="error" />;
  if (!wedding) return null;

  const {
    attendCount,
    bride,
    date,
    galleryImages,
    groom,
    id,
    location,
    message: { intro, invitation },
  } = wedding;
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        date={date}
        locationName={location.name}
        msg={intro}
      />
      <Invitation msg={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      {JSON.stringify(wedding)}
    </div>
  );
};

export default App;
