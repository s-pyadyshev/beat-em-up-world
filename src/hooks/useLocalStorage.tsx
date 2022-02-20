import { useState, useEffect } from "react";

function getSavedValue(key: any, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key: any, initialValue: any) {
  // use useState function to not call JSON.parse every time
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
