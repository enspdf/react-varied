import { useState, FC } from "react";
import {
  Box,
  Icon,
  Theme,
  Button,
  useTheme,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { FaVideoSlash, FaDownload, FaCamera } from "react-icons/fa";
import "video-react/dist/video-react.css";

// @ts-ignore
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";
// @ts-ignore
import { Player } from "video-react";
import { saveAs } from "file-saver";

type RecordType = "video" | "screen";

const MainRecorder: FC = () => {
  const theme: Theme = useTheme();
  const [recorder, setRecorder] = useState<RecordRTC | null>();
  const [stream, setStream] = useState<MediaStream | null>();
  const [videoBlob, setVideoBlob] = useState<Blob | null>();
  const [type, setType] = useState<RecordType>("video");

  const startRecording = async () => {
    const mediaDevices = navigator.mediaDevices;
    const stream: MediaStream =
      type === "video"
        ? await mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })
        : await mediaDevices.getDisplayMedia({
            video: true,
            audio: false,
          });

    const recorder: RecordRTC = new RecordRTCPromisesHandler(stream, {
      type: "video",
    });

    await recorder.startRecording();
    setRecorder(recorder);
    setStream(stream);
  };

  const stopRecording = async () => {
    if (recorder) {
      await recorder.stopRecording();
      (stream as any).stop();
      const blob: Blob = await recorder.getBlob();

      setVideoBlob(blob);
      setStream(null);
      setRecorder(null);
    }
  };

  const changeType = () =>
    type === "screen" ? setType("video") : setType("screen");

  const downloadVideo = async () => {
    if (videoBlob) {
      saveAs(videoBlob, `Vide-${Date.now()}.webm`);
    }
  };

  return (
    <SimpleGrid p="5" spacing="5">
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={["column", "row", "row", "row"]}
      >
        <Button
          m="1"
          bg={theme.colors.blue[600]}
          size="lg"
          color="white"
          onClick={changeType}
        >
          {type === "screen" ? "Record Video" : "Record Screen"}
        </Button>
        <IconButton
          m="1"
          bg={theme.colors.blue[500]}
          size="lg"
          aria-label="start recording"
          color="white"
          disabled={!!recorder}
          onClick={startRecording}
          icon={<Icon as={FaCamera} />}
        />
        <IconButton
          m="1"
          bg={theme.colors.blue[500]}
          size="lg"
          aria-label="stop recording"
          color="white"
          disabled={!recorder}
          onClick={stopRecording}
          icon={<Icon as={FaVideoSlash} />}
        />
        <IconButton
          m="1"
          bg={theme.colors.blue[500]}
          size="lg"
          aria-label="download recording"
          color="white"
          disabled={!videoBlob}
          onClick={downloadVideo}
          icon={<Icon as={FaDownload} />}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          h="50vh"
          width={["100%", "100%", "50vw", "50vw"]}
          bg={!!videoBlob ? "inherit" : theme.colors.blue[50]}
        >
          {!!videoBlob && (
            <Player src={window.URL.createObjectURL(videoBlob)} />
          )}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default MainRecorder;
