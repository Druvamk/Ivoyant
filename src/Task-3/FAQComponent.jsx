import FaQ from "./FaQ";
import { data } from "./data";
function FAQComponent() {
  return (
    <div>
      {data.map((item, index) => (
        <FaQ item={item} index={index} />
      ))}
    </div>
  );
}

export default FAQComponent;
