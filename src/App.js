import { Times } from './components/Times';
import { Stopwatch } from './components/Timer';
import  NoSleep  from "nosleep.js";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    let isEnableNoSleep = false;
    const noSleep = new NoSleep();
    document.addEventListener(
      `click`,
      function enableNoSleep() {
        document.removeEventListener(`click`, enableNoSleep, false);
        noSleep.enable();
        isEnableNoSleep = true;
        alert(`click and enable noSleep`);
      },
      false
    );
    return () => {
      if (isEnableNoSleep) {
        noSleep.disable();
      }
    };
  }, []);
  return (
    <div className="App font-mono">
      <Times></Times>
      <Stopwatch></Stopwatch>
    </div>
  );
}

export default App;
