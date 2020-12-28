import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;
`;

const Arrow = styled.button`
  font-family: monospace; 

  background-color: rgba(0, 0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;

  width: 2rem;
  height: 2rem;
`;

export { List, PageWrapper, Arrow }