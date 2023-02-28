import { useEffect, useState } from "react";
import "../styles/DisplayAnimals.css";
import useSound from "use-sound";

export const DisplayAnimals = ({ name, image, audio }) => {
  const [play, { stop }] = useSound(audio);
  const [isPlaying, setIsPlay] = useState(false);
  
  const handleClick = () => {
    if (isPlaying) {
      stop();
      setIsPlay(false);
    } else {
      play();
      setIsPlay(true);
    }
  };

  return (
    <button className={`${isPlaying ? "playing" : "list"}`} onClick={handleClick}>
      {image} :: {name}
    </button>
  );
};

export default DisplayAnimals;
