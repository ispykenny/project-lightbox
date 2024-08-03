'use client';

import { updateLightBoxState } from '@/actions/updateLightBoxState';
import { useState } from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
}

export const ToggleSwitch = ({ isOn }: ToggleSwitchProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLightBox = async () => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(async () => {
        await updateLightBoxState(!isOn);
        resolve('done');
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <button onClick={handleLightBox}>
      {isLoading ? 'Loading' : <>{isOn ? 'Turn off' : 'Turn on'}</>}
    </button>
  );
};
