import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

const Faq = () => {
  return (
    <div id="faq" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.faq.title}
        heading={sectionHeadingData.faq.heading}
        subheading={sectionHeadingData.faq.subheading}
      />
    </div>
  );
};

export default Faq;
