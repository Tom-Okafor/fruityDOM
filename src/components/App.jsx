import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import { SECTION_ONE_PARAGRAPHS } from "../constants";
import { SECTION_TWO_PARAGRAPHS } from "../constants";

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
        text='fruities can save your life'
      />
    </>
  );
}

export default App;
