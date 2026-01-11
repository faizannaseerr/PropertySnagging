import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

// mapcn component here

const Coverage = () => {
  return (
    <div id="coverage" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.coverage.title}
        heading={sectionHeadingData.coverage.heading}
        subheading={sectionHeadingData.coverage.subheading}
      />
    </div>
  );
};

export default Coverage;
