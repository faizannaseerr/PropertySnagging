import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

const Reasoning = () => {
  return (
    <div id="why-us" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.reasoning.title}
        heading={sectionHeadingData.reasoning.heading}
        subheading={sectionHeadingData.reasoning.subheading}
      />
    </div>
  );
};

export default Reasoning;
