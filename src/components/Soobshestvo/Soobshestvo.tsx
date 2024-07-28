import { FaTelegramPlane } from "react-icons/fa";

const Soobshestvo = (
  { label } = {
    label: "",
  }
) => {
  return (
    <div className="community--telegram__blocks--block">
      <span>
        <FaTelegramPlane />
      </span>
      <p>{label}</p>
    </div>
  );
};

export default Soobshestvo;
