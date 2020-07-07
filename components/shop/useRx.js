import { useState, useEffect } from 'react';

function useRx(signal) {
  let inital;
  let setStateFn = false;

  const subscription = signal.subscribe((value) => {
    if (!setStateFn) {
      inital = value;
    } else {
      setStateFn(value);
    }
  });

  const [state, setState] = useState(inital);
  useEffect(() => {
    setStateFn = setState;
    return () => {
      subscription.unsubscribe();
    };
  });
  return state;
}

export default useRx;
