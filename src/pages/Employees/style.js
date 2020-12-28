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

export { List, PageWrapper }