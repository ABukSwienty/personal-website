import Button from "../atoms/button";
import Section from "../atoms/section";
import Title from "../atoms/title";
import Text from "../atoms/text";

const AboutSection = () => {
  return (
    <Section className="flex h-full w-full flex-col justify-center bg-indigo-200 pt-32 pb-48 dark:bg-indigo-900">
      <Title size="6xl" className="mb-8 font-arsenal dark:text-gray-50">
        About me
      </Title>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Text color="gray" size="xl">
          <Text.Paragraph>
            I have a background in comparative literature from Copenhagen
            University. Shortly after graduating, I began work as a literary
            agent, representing Danish authors world-wide.
          </Text.Paragraph>
          <Text.Paragraph>
            <Text.Highlight>I turned to programming in 2019</Text.Highlight>{" "}
            when trying to solve the agency
            {"'"}s data issues.
          </Text.Paragraph>
          <Text.Paragraph>
            Our team was getting bogged down with admin and there were few
            modern tools that could help us. I decided to try and build a tool
            that could help us manage our data and automate some of the more
            tedious tasks.
          </Text.Paragraph>
          <Text.Paragraph>
            After a year and a half of development (using PHP and MySQL),{" "}
            <Text.Highlight>I launched a rights management tool</Text.Highlight>{" "}
            that could handle everything pertaining to our work with authors,
            contacts, contracts, sales history and even invoicing through an API
            connection to a third party invoicing system.
          </Text.Paragraph>
        </Text>
        <Text color="gray" size="xl" className="flex h-full flex-col">
          <Text.Paragraph>
            I had a knack for it and kept programming by taking a plethora of
            online courses; learning modern frameworks,{" "}
            <Text.Highlight>
              building quadtrees, simulating boids,
            </Text.Highlight>{" "}
            and collaborating with other programmers.
          </Text.Paragraph>
          <Text.Paragraph>
            Taking a leap of faith, I decided to jump ship, go rogue, and pursue
            a career in the tech sector.
          </Text.Paragraph>
          <div className="mt-16 grow pt-8">
            <Button trailingIcon="download" size="lg">
              <a
                href="/alexander-buk-swienty-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            </Button>
          </div>
        </Text>
      </div>
    </Section>
  );
};

export default AboutSection;
