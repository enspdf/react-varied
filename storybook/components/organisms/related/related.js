import PropTypes from "prop-types";
import StyledRelated from "./related.styles";

import ParseHTML from "../../particles/parseHTML";

import Intro from "../../molecules/intro/intro";

const Related = ({ intro, items, variant }) => {
  if (!items) return null;
  if (!items.length) return null;
  return (
    <StyledRelated className="related" variant={variant}>
      <div className="related__contents">
        <Intro {...intro} />
        <div className="related__items">
          {items.map((item) => (
            <RelatedItem {...item} variant={variant} />
          ))}
        </div>
      </div>
    </StyledRelated>
  );
};

// Expected prop values
Related.propTypes = {
  intro: shape({
    cta: shape({
      href: string.isRequired,
      label: string.isRequired,
      target: string,
    }),
    subtitle: string.isRequired,
    text: string.isRequired,
    title: string.isRequired,
  }),
  items: array.isRequired,
  variant: string,
};

Related.defaultProps = {
  items: [],
  variant: "posts",
};

const RelatedItem = ({
  category,
  description,
  image,
  slug,
  title,
  variant,
}) => (
  <div className="related-item">
    {image && slug && (
      <a href={`/${slug}`}>
        <div className="related-item__image">
          <img src={image} alt={title} />
        </div>
      </a>
    )}
    {category && category.href && category.label && (
      <h4 className="related-item__subtitle">
        <a href={category.href}>{category.label}</a>
      </h4>
    )}
    <h3 className="related-item__title">
      <a href={`/${slug}`}>{title}</a>
    </h3>
    <div className="related-item__description">{ParseHTML(description)}</div>
    <a href="#">View article</a>
  </div>
);

RelatedItem.propTypes = {
  category: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.shape({
    altText: PropTypes.string,
    mediaItemUrl: PropTypes.string.isRequired,
  }),
  productCategories: PropTypes.object,
  shortDescription: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Related;
