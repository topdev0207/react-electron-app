var { spawn } = require("child_process");

const record = (req, res) => {
  console.log("======", req);
  const child = spawn("ffmpeg", [
    "-i",
    "rtsp://192.168.235.128:1935/vod/sample.mp4",
    "-fflags",
    "flush_packets",
    "-max_delay",
    "2",
    "-flags",
    "-global_header",
    "-hls_time",
    "2",
    "-hls_list_size",
    "0",
    "-vcodec",
    "copy",
    "-y",
    "record/stream.m3u8",
  ]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  res.json("Recording");
};

module.exports = record;
