import { Wedding } from '@/models/wedding';
import { useModalContext } from '@contexts/modalContext';
import { useEffect, useRef } from 'react';

const AttendCountModal = ({ wedding }: { wedding: Wedding }) => {
  const { open, close } = useModalContext();

  const $input = useRef<HTMLInputElement>(null);

  const haveSeenModal = localStorage.getItem('@have-seen-modal');

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return;
    }

    open({
      title: `현재 참석자 : ${wedding.attendCount}명`,
      body: (
        <div>
          <input
            ref={$input}
            type="number"
            placeholder="참석 가능 인원을 적어주세요"
            style={{ border: '1px solid #000', width: '100%', padding: '4px' }}
          />
        </div>
      ),
      onClickLeftBtn: () => {
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
      onClickRightBtn: async () => {
        if ($input.current === null) return;

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default AttendCountModal;
