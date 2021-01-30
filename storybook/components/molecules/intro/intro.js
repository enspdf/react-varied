import PropTypes from "prop-types";
import StyledIntro from "./intro.styles";

const Intro = ({ cta, subtitle, text, title }) => (
  <StyledIntro className="intro">
    <div className="intro__contents">
      {subtitle && <h3 className="intro__subtitle">{subtitle}</h3>}
      {title && <h2 className="intro__title">{title}</h2>}
      {text && <p className="intro__text">{text}</p>}
      {cta && (
        <a className="intro__cta" href={cta.href} target={cta.target}>
          {cta.label}
        </a>
      )}
    </div>
  </StyledIntro>
);

Intro.propTypes = {
  cta: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    target: PropTypes.string,
  }),
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Intro;
