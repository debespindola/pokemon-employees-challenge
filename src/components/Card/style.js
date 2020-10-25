import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12rem;
  border-radius: 1rem;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export { Card, Title }