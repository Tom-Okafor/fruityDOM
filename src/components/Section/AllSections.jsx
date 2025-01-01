import Section from "./Section";
import * as paragraphs from "../../constants/index";

const {
  SECTION_ONE_PARAGRAPHS,
  SECTION_TWO_PARAGRAPHS,
  SECTION_THREE_PARAGRAPHS,
  SECTION_FOUR_PARAGRAPHS,
  SECTION_FIVE_PARAGRAPHS,
  SECTION_SIX_PARAGRAPHS,
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
        altText="A glass of lemonade juice."
        sectionParagraph={SECTION_THREE_PARAGRAPHS}
        text="fruity tips"
      />
      <Section
        source="assets/img1.png"
        altText="A peeled open banana."
        sectionParagraph={SECTION_FOUR_PARAGRAPHS}
        text="fruities! fruities! everytime, everyday!"
      />
      <Section
        source="assets/cherry.png"
        altText="A cherry"
        sectionParagraph={SECTION_FIVE_PARAGRAPHS}
        text="trust me, you need fruities"
      />
      <Section
        source="assets/mango.png"
        altText="three apples"
        sectionParagraph={SECTION_SIX_PARAGRAPHS}
        text="handling fruity allergies"
      />
    </>
  );
}
