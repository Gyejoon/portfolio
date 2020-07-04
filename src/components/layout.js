/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Style>
      <Header siteTitle="Header" />
      <MainStyle>
        <Navigation />
        <MainContent>{children}</MainContent>
      </MainStyle>
      <Footer />
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
  background-color: #999;
`;

const MainStyle = styled.main`
  width: 100%;
  height: calc(100% - 176px);
  display: flex;
  margin: 24px 0 24px 0;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
