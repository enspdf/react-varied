import PropTypes from "prop-types";

import StyledButton, { StyledLinkButton } from "./button.styles";

import IconPlus from "../../../assets/images/icons/plus.svg";
import IconBag from "../../../assets/images/icons/shopping-bag.svg";
import IconCart from "../../../assets/images/icons/shopping-cart.svg";
import IconUser from "../../../assets/images/icons/user.svg";
import IconX from "../../../assets/images/icons/x.svg";

const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const Button = ({ children, href, icon, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon} />} {children}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {icon && <ButtonIcon name={icon} />}
      {children}
    </StyledLinkButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};

const ButtonIcon = ({ name }) => {
  if (Icons[name] === undefined) return null;

  const Icon = Icons[name];

  return (
    <span className="button__icon">
      <Icon />
    </span>
  );
};

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
