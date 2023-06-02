import "./search-box.styles.css";

const SearchBox = ({className, placeholder, onChange}) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default SearchBox;
