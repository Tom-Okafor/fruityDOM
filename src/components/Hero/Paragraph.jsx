import PropTypes from "prop-types";

export default function Paragraph({ words }) {
  return <p>{words}</p>;
}

Paragraph.propTypes = {
  words: PropTypes.string.isRequired,
};
