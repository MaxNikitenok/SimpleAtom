import { useEffect, useState } from 'react';

export const Clock = () => {
  const [value, setValue] = useState(new Date());
  const [isColonVisible, setIsColonVisible] = useState(false);

  const res = `${value.toLocaleString('en-US', {
    weekday: 'short',
  })} ${value.toLocaleString('en-US', { month: 'short' })} ${
    value.toLocaleTimeString('en-US').length < 11
      ? value.toLocaleTimeString('en-US').slice(0, 1) +
        (isColonVisible ? ':' : ' ') +
        value.toLocaleTimeString('en-US').slice(2, 4)
      : value.toLocaleTimeString('en-US').slice(0, 2) +
        (isColonVisible ? ':' : ' ') +
        value.toLocaleTimeString('en-US').slice(3, 5)
  } ${value.toLocaleTimeString('en-US').slice(-2)}`;

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setIsColonVisible(!isColonVisible);
  }, [value]);

  return <>{res}</>;
};
