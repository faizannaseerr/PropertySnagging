import SectionHeading from "./sectionHeading";
import { sectionHeadingData } from "@/lib/data";
import { servicesData } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full flex flex-col items-start justify-center"
    >
      <SectionHeading
        title={sectionHeadingData.services.title}
        heading={sectionHeadingData.services.heading}
        subheading={sectionHeadingData.services.subheading}
      />
      <div className="flex grid grid-cols-4 gap-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-8 w-full bg-black/95 p-4 rounded-xs shadow-md text-[#fbf9f5]"
          >
            <div className="flex flex-row items-start justify-between gap-8 mb-12 w-full">
              <h3 className="text-lg font-medium leading-tight tracking-tight">
                {service.title}
              </h3>
              {/* ring-1 ring-[#fbf9f5]/90 -- for icon background */}
              <div className="flex p-3 bg-[#fbf9f5] rounded-xs w-fit">
                {service.icon && (
                  <service.icon className="w-6 h-6 text-black" />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-xs text-white/80">{service.description}</p>
              <a
                href="#contact"
                className="group text-xs text-white flex items-center gap-1 hover:text-white transition-all duration-200 cursor-pointer w-fit"
              >
                Learn More{" "}
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:rotate-45 transition-all duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
