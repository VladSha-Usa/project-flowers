import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target) && ref.current) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
