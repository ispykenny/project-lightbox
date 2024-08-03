'use server';

import { revalidatePath } from 'next/cache';

export const updateLightBoxState = async (isOn: boolean) => {
  await fetch(`${process.env.IP_ADDRESS}/json/state`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ on: isOn }),
  });

  revalidatePath('/');

  return {
    status: 200,
    message: 'Lightbox state updated',
  };
};
