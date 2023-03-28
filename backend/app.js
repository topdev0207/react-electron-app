Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "Bunny",
  // streamUrl: "rtsp://YOUR_IP:PORT",
  streamUrl: "rtsp://192.168.235.128:1935/vod/sample.mp4",
  wsPort: 6789,
  ffmpegOptions: {
    // options ffmpeg flags
    "-f": "mpegts", // output file format.
    "-codec:v": "mpeg1video", // video codec
    "-b:v": "1000k", // video bit rate
    "-stats": "",
    "-r": 25, // frame rate
    "-s": "640x480", // video size
    "-bf": 0,
    // audio
    "-codec:a": "mp2", // audio codec
    "-ar": 44100, // sampling rate (in Hz)(in Hz)
    "-ac": 1, // number of audio channels
    "-b:a": "128k", // audio bit rate
  },
});
