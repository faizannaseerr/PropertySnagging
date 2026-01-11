import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex items-center justify-start">
      <SectionHeading
        title={sectionHeadingData.contact.title}
        heading={sectionHeadingData.contact.heading}
        subheading={sectionHeadingData.contact.subheading}
      />
    </div>
  );
};

export default Contact;
