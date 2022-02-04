import PropTypes from "prop-types";

export const BookmarkForm = ({ onHandleSave, onHandleChange, form }) => (
  <>
    <form onSubmit={(e) => onHandleSave(e)}>
      <div className="form-control">
        <label htmlFor="title">Title: </label>
        <input
          className="form-input-text"
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={(e) => onHandleChange(e.target)}
        />
      </div>
      <div className="form-control">
        <label className="FormLabel" htmlFor="Link">
          Link:
        </label>
        <input
          className="form-input-text"
          type="url"
          name="link"
          id="Link"
          value={form.link}
          onChange={(e) => onHandleChange(e.target)}
        />
      </div>
      <input
        type="submit"
        className="buttom-add"
        disabled={form.title === "" || form.link === ""}
        value="Add"
      />
    </form>
  </>
);

BookmarkForm.propTypes = {
  onHandleSave: PropTypes.func,
  onHandleChange: PropTypes.func,
  form: PropTypes.object,
};
