import { useEffect, useState } from 'react';

export default function useLocalStorage(defaultValue, name) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const val = localStorage.getItem(name);
    if (val && +val !== defaultValue) {
      setValue(+val);
    }
  }, [name, defaultValue]);

  useEffect(() => {
    localStorage.setItem(name, value);
  }, [value, name]);

  return [value, setValue];
}
