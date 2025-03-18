"use client"; // Add this directive

import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, _setValue] = useState<T>(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    _setValue(storedValue ? JSON.parse(storedValue) : initialValue);
  }, []);

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    _setValue(value);
  }
  console.log('return value', value);
  return [value, setValue] as const;
};