import PropTypes from 'prop-types'

export default function Image({ source, altText }) {
  return <img src={source} alt={altText} />;
}

Image.propTypes = {
    source: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
}