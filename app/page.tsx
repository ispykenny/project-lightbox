import Image from 'next/image';
import { ToggleSwitch } from './ToggleSwitch';
import { getLightBoxState } from '@/actions/getLightBoxState';

export default async function Home() {
  const { data, isOn } = await getLightBoxState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToggleSwitch isOn={isOn} />
    </main>
  );
}
