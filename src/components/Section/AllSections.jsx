import Section from "./Section";
import * as paragraphs from "../../constants/index";

const {
  SECTION_ONE_PARAGRAPHS,
  SECTION_TWO_PARAGRAPHS,
  SECTION_THREE_PARAGRAPHS,
  SECTION_FOUR_PARAGRAPHS,
} = paragraphs;

export default function AllSections() {
  return (
    <>
      <Section
        source="assets/girl.png"
        altText="excited little girl in a fruit garden."
        text="did you know?"
        sectionParagraph={SECTION_ONE_PARAGRAPHS}
      />
      <Section
        source="assets/img9.png"
        altText="strawberries in a white plate"
        sectionParagraph={SECTION_TWO_PARAGRAPHS}
        text="fruities can save your life"
      />
      <Section
        source="assets/img10.png"
        altText="A glass of orange juice."
        sectionParagraph={SECTION_THREE_PARAGRAPHS}
        text="fruity tips"
      />
      <Section
        source="assets/img1.png"
        altText="A peeled open banana."
        sectionParagraph={SECTION_FOUR_PARAGRAPHS}
        text="fruities! fruities! everytime, everyday!"
      />
    </>
  );
}
