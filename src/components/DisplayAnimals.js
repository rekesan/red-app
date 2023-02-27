import "../styles/DisplayAnimals.css"

export const DisplayAnimals = ({ name, image }) => {
  return (
    <div className="list">
      {image} :: {name}
    </div>
  );
};

export default DisplayAnimals;