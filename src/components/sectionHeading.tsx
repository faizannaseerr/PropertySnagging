const SectionHeading = ({
  title,
  heading,
  subheading,
}: {
  title: string;
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 max-w-3xl mb-12">
      <div>{title && <p className="text-sm font-medium">{title}</p>}</div>
      <div className="flex flex-col items-start justify-center gap-2">
        {heading && (
          <h1 className="text-4xl font-bold font-special leading-tight tracking-tight">
            {heading}
          </h1>
        )}
        {subheading && (
          <h2 className="text-lg font-inter font-medium text-black/70">
            {subheading}
          </h2>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
