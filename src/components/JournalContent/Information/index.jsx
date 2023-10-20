import CenterText from "./CenterText";
import List from "./List";
import Paragraph from "./Paragraph";

const Information = ({ data }) => {
  return data.map((value, index) => {
    if (value.data_type === 1) {
      return <Paragraph key={index} data={value} />;
    } else if (value.data_type === 2) {
      return <List key={index} data={value} />;
    } else if (value.data_type === 3) {
      return <CenterText key={index} data={value} />;
    } else {
      return <></>;
    }
  });
};

export default Information;
