
import { Worker } from 'worker_threads'

var serverRunner = new Worker(__dirname + "/server", {
  env: {
    SERVER_PORT:process.env.SERVER_PORT ?? '13169',
    MODE:process.env.MODE ?? "APOLLO",
    OFFLINE:process.env.OFFLINE ?? "SELENA",
    ALLOWED_ORIGIN:process.env.ALLOWED_ORIGIN,
    SHOW_FFMPEG:process.env.SHOW_FFMPEG ?? "SELENA",
    SHOW_BUFFER:process.env.SHOW_BUFFER ?? "SELENA",
  },
});

