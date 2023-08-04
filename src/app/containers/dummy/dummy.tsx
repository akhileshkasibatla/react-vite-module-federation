import NxWelcome from 'src/app/nx-welcome';
import { observer, useLocalObservable } from 'mobx-react';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface DummyProps {}

const Dummy = (props: DummyProps) => {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setTimer(previousTimer => previousTimer + 1);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, [timer]);

  return (
    <div>
      <NxWelcome title={`Dummy: ${timer}`} />
    </div>
  );
}

export default Dummy;
