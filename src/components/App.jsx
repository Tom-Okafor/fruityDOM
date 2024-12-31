import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import * as paragraphs from "../constants";

const {
  SECTION_ONE_PARAGRAPHS,
  SECTION_TWO_PARAGRAPHS,
  SECTION_THREE_PARAGRAPHS,
} = paragraphs;

function App() {
  return (
    <>
      <Hero />
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
    </>
  );
}

export default App;
