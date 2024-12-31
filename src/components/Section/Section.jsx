import Image from "../Image";
import TextBlock from "./Textblock";
import PropTypes from "prop-types";

function Section({ source, altText, sectionParagraph, text }) {
  return (
    <section>
      <Image source={source} altText={altText} />
      <TextBlock sectionParagraph={sectionParagraph} text={text} />
    </section>
  );
}

export default Section;

Section.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
  sectionParagraph: PropTypes.array,
  text: PropTypes.string.isRequired,
};
