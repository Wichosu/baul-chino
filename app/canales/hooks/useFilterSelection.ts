"use client"
import { useState, useCallback } from "react";

// Custom hook for filter logic
export const useFilterSelection = <T extends number>(initial: T[] = []) => {
  const [selected, setSelected] = useState<T[]>(initial);
  const [resetTrigger, setResetTrigger] = useState(false);

  const addId = useCallback((id: T) => {
    setSelected(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const removeId = useCallback((id: T) => {
    setSelected(prev => prev.filter(item => item !== id));
  }, []);

  const reset = useCallback(() => {
    setSelected([]);
    setResetTrigger(true);
  }, []);

  const clearTrigger = useCallback(() => {
    setResetTrigger(false);
  }, []);

  return { selected, addId, removeId, reset, resetTrigger, clearTrigger };
};
