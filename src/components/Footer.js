import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <Style>
      <span>© 2020.07. By Gyejoong</span>
      <code>
        Powered by <a href="http://github.com/Gyejoon/portfolio">Gyejoong</a>
      </code>
    </Style>
  );
};

const Style = styled.footer`
  width: 100%;
  height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 14px;
  }

  code {
    font-size: 12px;
    background-color: #ccc;
    padding: 2px;
    margin: 4px;
    border-radius: 4px;
  }
`;

export default Footer;
