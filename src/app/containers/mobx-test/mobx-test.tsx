import styles from './mobx-test.module.scss';
import NxWelcome from 'src/app/nx-welcome';
import { observer, useLocalObservable } from 'mobx-react';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface MobxTestProps {}

const MobxTest = (props: MobxTestProps): JSX.Element => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++;
    }
  }));

  useEffect(() => {
    const handle = setInterval(() => {
      timer.increaseTimer();
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, [timer]);

  return (
    <div>
      <NxWelcome title={`Mobx Webpack Timer: ${timer.secondsPassed}`} />
    </div>
  );
};

export default observer(MobxTest);
