import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContent = ({ children }) => {
  return <Style>{children}</Style>;
};

const Style = styled.div`
  width: 100%;
  background-color: #fff;
  margin-left: 24px;
  padding: 12px;
`;

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
