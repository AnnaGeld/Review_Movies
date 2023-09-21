import { faqs } from "../../../data/faqs";
import FaqList from "./FaqList";
const FaqItem = () => {
  return (
    <div className= "bg-blackmt-5 lg:mt-7">
      {faqs.map((faq, index) => (
        <FaqList faq={faq} key={index} />
      ))}
    </div>
  );
};

export default FaqItem;
