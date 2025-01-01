import Image from "../Image";
import Paragraph from "../Hero/Paragraph";
import PropTypes from "prop-types";

function Card({ source, alt, words, caption }) {
  return (
    <div className="card">
      <div className="img">
        <Image source={source} altText={alt} />
      </div>
      <Paragraph words={words} />
      <h4>{caption}</h4>
    </div>
  );
}

Card.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  words: PropTypes.string,
  caption: PropTypes.string,
};

export default Card;
