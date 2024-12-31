import Image from "../Image";
import TextBlock from "./Textblock";
import { SECTION_ONE_PARAGRAPHS } from "../../constants";

function Section() {
  return (
    <section>
      <Image
        source="/assets/girl.png"
        altText="stawberries on a white plate."
      />
      <TextBlock sectionParagraph={SECTION_ONE_PARAGRAPHS} />
    </section>
  );
}

export default Section;
