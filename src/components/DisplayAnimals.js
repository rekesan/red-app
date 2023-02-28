import "../styles/DisplayAnimals.css";
import useSound from "use-sound";

export const DisplayAnimals = ({ name, image, audio }) => {
  const [play] = useSound(audio);
  return (
    <button className="list" onClick={play}>
      {image} :: {name}
    </button>
  );
};

export default DisplayAnimals;
