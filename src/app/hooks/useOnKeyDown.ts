import React from 'react';

function useOnKeyDown(
  key: string,
  callback: () => void,
  element?: HTMLElement
) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    if (element) {
      element.addEventListener('keydown', handleKeyDown);
    } else {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKeyDown);
      } else {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [key, callback, element]);
}

export default useOnKeyDown;
