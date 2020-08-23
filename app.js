import express from "express";

const server = express();
const PORT = 3000;
const staticDir = ".";

server.set("port", PORT);

server.use("/", express.static(staticDir));

server.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Start server on port ${PORT}.`);
});
