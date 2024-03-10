import { useState } from 'react';

interface UseOpenProps {
  initialValue?: boolean;
}

export interface UseOpenI {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * Custom hook for managing open and close state.
 * @param {UseOpenProps} props - Hook options.
 * @returns {Object} - An object containing the isOpen, open, and close functions.
 */

export const useOpen = ({ initialValue = false }: UseOpenProps) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return { isOpen, open, close, toggle };
};
