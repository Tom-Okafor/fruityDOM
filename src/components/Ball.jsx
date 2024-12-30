import PropTypes from "prop-types";

export default function Ball({ bgColor }) {
  return <div className="ball" style={{ backgroundColor: bgColor }}></div>;
}

Ball.propTypes = {
  bgColor: PropTypes.string.isRequired,
};
