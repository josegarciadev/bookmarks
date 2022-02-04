import { Card } from "../card";
import PropTypes from "prop-types";

export const BookmarkList = ({ data }) => {
  return (
    <div className="container">
      <div className="container-grid">
        {data &&
          data.length >= 1 &&
          data.map((value, index) => (
            <Card key={value.id} label={value.title} />
          ))}
      </div>
    </div>
  );
};

BookmarkList.propTypes = {
  data: PropTypes.array,
};
