import {
  FaFaceAngry,
  FaFaceDizzy,
  FaFaceFlushed,
  FaFaceFrownOpen,
  FaFaceFrown,
  FaFaceGrimace,
  FaFaceGrinBeamSweat,
  FaFaceGrinBeam,
  FaFaceGrinHearts,
  FaFaceGrinSquintTears,
  FaFaceGrinSquint,
  FaFaceGrinStars,
  FaFaceGrinTears,
  FaFaceGrinTongueSquint,
  FaFaceGrinTongueWink,
  FaFaceGrinTongue,
  FaFaceGrinWide,
  FaFaceGrinWink,
  FaFaceGrin,
  FaFaceKissBeam,
  FaFaceKissWinkHeart,
  FaFaceKiss,
  FaFaceLaughBeam,
  FaFaceLaughSquint,
  FaFaceLaughWink,
  FaFaceLaugh,
  FaFaceMehBlank,
  FaFaceMeh,
  FaFaceRollingEyes,
  FaFaceSadCry,
  FaFaceSadTear,
  FaFaceSmileBeam,
  FaFaceSmileWink,
  FaFaceSmile,
  FaFaceSurprise,
  FaFaceTired,
} from "react-icons/fa6";

const Emote = ({ name }) => {
  switch (name) {
    case "FaFaceAngry":
      return <FaFaceAngry />;
    case "FaFaceDizzy":
      return <FaFaceDizzy />;
    case "FaFaceFlushed":
      return <FaFaceFlushed />;
    case "FaFaceFrownOpen":
      return <FaFaceFrownOpen />;
    case "FaFaceFrown":
      return <FaFaceFrown />;
    case "FaFaceGrimace":
      return <FaFaceGrimace />;
    case "FaFaceGrinBeamSweat":
      return <FaFaceGrinBeamSweat />;
    case "FaFaceGrinBeam":
      return <FaFaceGrinBeam />;
    case "FaFaceGrinHearts":
      return <FaFaceGrinHearts />;
    case "FaFaceGrinSquintTears":
      return <FaFaceGrinSquintTears />;
    case "FaFaceGrinSquint":
      return <FaFaceGrinSquint />;
    case "FaFaceGrinStars":
      return <FaFaceGrinStars />;
    case "FaFaceGrinTears":
      return <FaFaceGrinTears />;
    case "FaFaceGrinTongueSquint":
      return <FaFaceGrinTongueSquint />;
    case "FaFaceGrinTongueWink":
      return <FaFaceGrinTongueWink />;
    case "FaFaceGrinTongue":
      return <FaFaceGrinTongue />;
    case "FaFaceGrinWide":
      return <FaFaceGrinWide />;
    case "FaFaceGrinWink":
      return <FaFaceGrinWink />;
    case "FaFaceGrin":
      return <FaFaceGrin />;
    case "FaFaceKissBeam":
      return <FaFaceKissBeam />;
    case "FaFaceKissWinkHeart":
      return <FaFaceKissWinkHeart />;
    case "FaFaceKiss":
      return <FaFaceKiss />;
    case "FaFaceLaughBeam":
      return <FaFaceLaughBeam />;
    case "FaFaceLaughSquint":
      return <FaFaceLaughSquint />;
    case "FaFaceLaughWink":
      return <FaFaceLaughWink />;
    case "FaFaceLaugh":
      return <FaFaceLaugh />;
    case "FaFaceMehBlank":
      return <FaFaceMehBlank />;
    case "FaFaceMeh":
      return <FaFaceMeh />;
    case "FaFaceRollingEyes":
      return <FaFaceRollingEyes />;
    case "FaFaceSadCry":
      return <FaFaceSadCry />;
    case "FaFaceSadTear":
      return <FaFaceSadTear />;
    case "FaFaceSmileBeam":
      return <FaFaceSmileBeam />;
    case "FaFaceSmileWink":
      return <FaFaceSmileWink />;
    case "FaFaceSmile":
      return <FaFaceSmile />;
    case "FaFaceSurprise":
      return <FaFaceSurprise />;
    case "FaFaceTired":
      return <FaFaceTired />;
    default:
      return <></>;
  }
};

export default Emote;
