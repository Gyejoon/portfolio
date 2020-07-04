import React from 'react';
import styled from 'styled-components';

const Navigiation = () => {
  const contents = [
    {
      id: 1,
      name: 'Navigation 1',
    },
    {
      id: 2,
      name: 'Navigation 2',
    },
    {
      id: 3,
      name: 'Navigation 3',
    },
    {
      id: 4,
      name: 'Navigation 4',
    },
  ];

  return (
    <Block>
      {contents.map((content) => (
        <p key={content.id}>{content.name}</p>
      ))}
    </Block>
  );
};

const Block = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px;

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default Navigiation;
