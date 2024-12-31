import HeadText from "../Headtext";
import Paragraph from "../Hero/Paragraph";
import PropTypes from "prop-types";

function TextBlock({ sectionParagraph, text }) {
  return (
    <article>
      <HeadText text={text} />
      {sectionParagraph.map((paragraph, index) => (
        <Paragraph key={index} words={paragraph} />
      ))}
    </article>
  );
}

export default TextBlock;

TextBlock.propTypes = {
  sectionParagraph: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  text: PropTypes.string.isRequired,
};
