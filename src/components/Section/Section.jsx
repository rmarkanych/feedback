import PropTypes from 'prop-types';

const Section = ({ wrapper, children }) => (
  <section>
    <h2>{wrapper}</h2>
    {children}
  </section>
);
Section.propTypes = {
  wrapper: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
