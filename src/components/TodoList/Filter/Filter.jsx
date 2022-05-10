export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label class="modal-form__label" htmlFor={31}>
        Filter
      </label>
      <input
        class="modal-form__input"
        type="text"
        name="search"
        id={31}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
