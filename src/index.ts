import "reflect-metadata";
const PORT = process.env.port || 3000;
import express = require('express');
import { createConnection } from "typeorm";

const app = express();

createConnection()
  .then(async () => {
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));

export default app;
