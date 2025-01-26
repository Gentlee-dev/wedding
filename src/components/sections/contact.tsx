import { useEffect, useRef } from 'react';
import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import Section from '@shared/section';
import { Location, Person, Wedding } from '@models/wedding';
import Accordion from '../shared/accordion';

declare global {
  interface Window {
    kakao: any;
  }
}

const cx = classNames.bind(styles);

const Contact = ({
  groom,
  bride,
}: {
  groom: Wedding['groom'];
  bride: Wedding['bride'];
}) => {
  return (
    <Section title="연락처 및 마음 전하실 곳" className={cx('container')}>
      <Accordion label="신랑측">
        <ContactInfo
          account={groom.account}
          name={groom.name}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          account={groom.parents[0].account}
          name={groom.parents[0].name}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          account={groom.parents[1].account}
          name={groom.parents[1].name}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          account={bride.account}
          name={bride.name}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          account={bride.parents[0].account}
          name={bride.parents[0].name}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          account={bride.parents[1].account}
          name={bride.parents[1].name}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  );
};

const ContactInfo = ({ name, account, phoneNumber }: Person) => {
  const handleCopyClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert('복사 되었습니다.');
  };

  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      <ul className={cx('wrap-btns')}>
        <li>
          <a className={cx('btn')} href={`tel: ${phoneNumber}`}>
            전화
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              handleCopyClipBoard(
                `${account.bankName} ${account.accountNumber}`,
              );
            }}
            className={cx('btn')}
          >
            복사
          </button>
        </li>
        {account.kakaopayLink && (
          <li>
            <a
              href={account.kakaopayLink}
              target={'_blank'}
              className={cx('btn')}
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contact;
