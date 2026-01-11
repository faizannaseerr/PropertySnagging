import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

const Certifications = () => {
  return (
    <div id="certifications" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.certifications.title}
        heading={sectionHeadingData.certifications.heading}
        subheading={sectionHeadingData.certifications.subheading}
      />
    </div>
  );
};

export default Certifications;
