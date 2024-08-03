interface LightBoxState {
  data: {
    [key: string]: any;
  };
  isOn: boolean;
}

export const getLightBoxState = async (): Promise<LightBoxState> => {
  const response = await fetch(`${process.env.IP_ADDRESS}/json/state`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return {
    data: data,
    isOn: data.on,
  };
};
