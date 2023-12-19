import { parentPort } from 'worker_threads'

parentPort.on('message', (consoleValue) => {
   let counter:number=0;
   for (let i = 0; i < 200000; i++) {
      counter++;
      console.log(consoleValue);
    };
   console.log(`Received message in worker: ${counter}`);
   parentPort.postMessage(counter);
 });