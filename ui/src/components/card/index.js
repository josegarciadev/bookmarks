import PropTypes from "prop-types";

export const Card = ({ label }) => {
  return (
    <div className="card">
      <p className="card-label">{label}</p>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
};
