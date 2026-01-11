import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

const Testimonials = () => {
  return (
    <div id="testimonies" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.testimonials.title}
        heading={sectionHeadingData.testimonials.heading}
        subheading={sectionHeadingData.testimonials.subheading}
      />
    </div>
  );
};

export default Testimonials;
