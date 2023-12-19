import express from "express";
import { Worker } from 'worker_threads'

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
   const worker = new Worker('./worker.ts')

    worker.on('message', (counter) => {
     
      console.log(`Received message from worker: ${counter}`);
      res.send(`Hello World! about  ${counter}`);
    });
   const consoleValue = 'I dey try run ooooo';
    worker.postMessage(consoleValue);
 });

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


// const password = "super-secure-pa$$word";
// const userID = crypto.randomUUID()

// const argonHash = await Bun.password.hash(password, {
//   algorithm: "argon2id",
//   memoryCost: 4096, // memory usage in kibibytes
//   timeCost: 4 // the number of iterations
// });

// // use bcrypt
// const bcryptHash = await Bun.password.hash(password, {
//   algorithm: "bcrypt",
//   cost: 4, // number between 4-31
// });

// console.log(userID)
// console.log("Hello via Bun!", argonHash);
// console.log("Hello via Bun!", bcryptHash);

