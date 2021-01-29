import { useState } from "react";
import PropTypes from "prop-types";

import StyledHeader from "./header.styles";

import Logo from "../../../assets/logo.png";
import Button from "../../atoms/button/button";
import Navigation from "../../molecules/navigation/navigation";

const Header = ({ navigation }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className={isOpen ? `header--open` : `header--closed`}>
      <div className="header__navigation">
        {navigation.length > 0 &&
          navigation.map(({ items, title }) => (
            <Navigation items={items} key={`header-menu-${title}`} />
          ))}
      </div>
      <img src={Logo} alt="Celtic Elements Logo" />
      <Button onClick={toggleMenu}>{isOpen ? `Hide` : `Show`} menu</Button>
    </StyledHeader>
  );
};

Header.propTypes = {
  navigation: PropTypes.arrayOf({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string,
  }),
};

Header.defaultProps = {
  navigation: [],
};

export default Header;
