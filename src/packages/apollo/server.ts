import express, { json } from "express";
import { APOLLO_OUT } from "./deps";
import { getDistributeAble, getFormats } from "./core";
import {
  loadFormatServerRequest,
  loadFormatServerResponse,
} from "./core/format/type";
import { downloadServerRequest } from "./core/download/type";
import { clearCache } from "./core/merge/dep";
const cors = require("cors");


var server = express();
var port = process.env.SERVER_PORT;

server.use(express.json());

// server.use(cors({ origin: "https://apolloandselena.onrender.com" }));

server.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);

server.post("/loadformats", (request, response) => {
  APOLLO_OUT(`request found @/loadformats`);

  var reqBody: loadFormatServerRequest = request.body;
  var url = reqBody.url;

  getFormats(url).then(
    (d) => {
      var toFly: loadFormatServerResponse = {
        condition: "APOLLO",
        data: d,
      };
      response.status(200).json(toFly);
      APOLLO_OUT(`request resolved as success @/loadformats`);
    },
    (e) => {
      var toFly: loadFormatServerResponse = {
        condition: "NIGHT",
        data: e,
      };
      response.status(200).json(toFly);
      APOLLO_OUT(`request resolved as failure @/loadformats`);
      console.log(e);
    }
  );
});

server.post("/download", (request, response) => {
  APOLLO_OUT(`request found @/download`);

  var reqBody: downloadServerRequest = request.body;

  getDistributeAble(reqBody.url, reqBody.format).then(
    (path: any) => {
      response.status(200).sendFile(process.cwd() + "/" + path);

      response.addListener("close", () => {
        clearCache(process.cwd() + "/" + path);
      });
      APOLLO_OUT(`resolved request as success @/download`);
    },
    (err) => {
      APOLLO_OUT(`resolved request as failure @/download`);
      console.log(err);
      response.status(513).json(err);
    }
  );
});

// server.get("/download", (request, response) => {
//   response.setHeader('Content-Disposition', 'attachment; filename=example.mp4');
//   createReadStream('./offlineStreams/vid.mp4').pipe(response)
// });

// server.get("/", (request, response) => {
//   response.sendFile(process.cwd() + '/offlineStreams/index.html')
// })

server.listen(port, () => {
  APOLLO_OUT(`@env SERVER_PORT = ${process.env.SERVER_PORT}`);
  APOLLO_OUT(`@env MODE = ${process.env.MODE}`);
  APOLLO_OUT(`@env OFFLINE = ${process.env.OFFLINE}`);
  APOLLO_OUT(`@env SHOW_FFMPEG = ${process.env.SHOW_FFMPEG}`);
  APOLLO_OUT(`@env SHOW_BUFFER = ${process.env.SHOW_BUFFER}`);
  APOLLO_OUT(`@env ALLOWED_ORIGIN = ${process.env.ALLOWED_ORIGIN}`);
  APOLLO_OUT(`has started @port :${port}`);
  APOLLO_OUT(`waiting for requests`);
});
