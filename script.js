window.onload = function() {
  let timerId = null;
  let counter = 0;
  //   let interval = 1000; // 60bpm
  //   let interval = 500; // 120bpm

  let bpm = 120;
  let meterNumerator = 4;
  let meterDenominator = 4;

  let interval = (60 * 1000) / bpm;

  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');

  const renderBeat = n => {
    const playedBeat = document.getElementById(n);
    console.log('window.onload -> playedBeat', playedBeat);

    if (playedBeat.getAttribute('class') === 'active') {
      playedBeat.classList = '';
    } else {
      playedBeat.classList = 'active';
    }
    console.log('window.onload -> playedBeat.classList', playedBeat.classList);

    if (n + 1 > meterNumerator) {
      counter = 0;
    }
  };

  const doTick = () => {
    counter++;
    console.log('tick', counter);
    renderBeat(counter);
  };

  const startMetronome = () => {
    if (timerId === null) {
      //   console.log(' started');
      doTick();

      timerId = setInterval(() => {
        doTick();
      }, interval);
    } else {
      console.log(' blocked');
    }
  };

  const stopMetronome = () => {
    clearInterval(timerId);
    timerId = null;
    counter = 0;
    console.log(' stopped');
  };

  startBtn.addEventListener('click', startMetronome);
  stopBtn.addEventListener('click', stopMetronome);

  //   //create the context for the web audio
  //   var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  //   // we create the gain module, named as volume, and connect it to our
  //   var volume = audioCtx.createGain();
  //   volume.connect(audioCtx.destination);

  //   var sine = audioCtx.createOscillator();

  //   //create, tune, start and connect each oscillator sinea, sineb and sinec
  //   var sinea = audioCtx.createOscillator();
  //   sinea.frequency.value = 440;
  //   sinea.type = 'sine';

  //   var sineb = audioCtx.createOscillator();
  //   sineb.frequency.value = 523.25;
  //   sineb.type = 'sine';

  //   var sinec = audioCtx.createOscillator();
  //   sinec.frequency.value = 698.46;
  //   sinec.type = 'sine';

  //   document.getElementById('play').addEventListener('click', function() {
  //     sine.start();
  //     sine.connect(volume);

  //     // sinea.start();
  //     // sinea.connect(audioCtx.destination);

  //     // sineb.start();
  //     // sineb.connect(audioCtx.destination);

  //     // sinec.start();
  //     // sinec.connect(audioCtx.destination);
  //   });

  //   document.getElementById('stop').addEventListener('click', function() {
  //     sine.stop();
  //     sine.connect(volume);

  //     // sinea.stop();
  //     // sinea.connect(audioCtx.destination);

  //     // sineb.stop();
  //     // sineb.connect(audioCtx.destination);

  //     // sinec.stop();
  //     // sinec.connect(audioCtx.destination);
  //   });
};
