import PropTypes from "prop-types";

function HeadText({ text }) {
  return <h2>{text}</h2>;
}

HeadText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default HeadText;
