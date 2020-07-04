import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <Style>
    <div className="title-wrapper">
      <h1>{siteTitle}</h1>
    </div>
  </Style>
);

const Style = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;

  .title-wrapper {
    padding: 0.3rem 1.0875rem 1.45rem;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
