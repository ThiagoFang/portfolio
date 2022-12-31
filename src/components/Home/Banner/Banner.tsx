import { useRef, useState } from "react";
import { ArrowDown } from "../../common/ArrowDown";
import { BannerTitle } from "../BannerTitle";
import { DigitalClock } from "../DigitalClock";
import * as C from "./styles";
import videoBg from "/assets/video/video_color.mp4";

export const Banner = () => {
  const [pause, setPause] = useState(true);

  const videoRef: React.MutableRefObject<HTMLVideoElement | null> =
    useRef(null);

  const handleToggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setPause(true);
        return;
      }
      video.pause();
      setPause(false);
    }
  };

  return (
    <C.Container>
      <C.Video ref={videoRef} src={videoBg} autoPlay loop muted />
      <C.ContentArea>
        <ArrowDown to="#about" />
        <DigitalClock />
        <C.PlayPause
          onClick={handleToggleVideo}
          className={`ri-pause-fill ${pause ? "active" : ""}`}
        ></C.PlayPause>
        <C.PlayPause
          onClick={handleToggleVideo}
          className={`ri-play-mini-line ${pause ? "" : "active"}`}
        ></C.PlayPause>
        <BannerTitle />
      </C.ContentArea>
    </C.Container>
  );
};
