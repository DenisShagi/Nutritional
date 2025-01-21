import { Button as SharedButton } from '@/shared/ui';
import { useState } from 'react';

export function HeaderButton() {
  const [state, setState] = useState('Я — Клиент');

  const toggleState = () => {
    setState(state === 'Я — Клиент' ? 'Я — Гость' : 'Я — Клиент');
  };

  return (
    <>
      <SharedButton
        sx={{
          backgroundColor: '#FFF',
          color: '#212421',
          '&:hover': {
            backgroundColor: '#e5e3e3',
          },
          '&:active': {
            backgroundColor: '#e5e3e3',
          },
        }}
        onClick={toggleState}
      >
        {state}
      </SharedButton>
    </>
  );
}
