import PropTypes from "prop-types";

import StyledNavigation from "./navigation.styles";

const Navigation = ({ direction, items }) => (
  <StyledNavigation direction={direction}>
    {items.map((item) => (
      <a href={item.url}>{item.title}</a>
    ))}
  </StyledNavigation>
);

Navigation.propTypes = {
  direction: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Navigation.defaultProps = {
  direction: "horizontal",
  items: [],
};

export default Navigation;
