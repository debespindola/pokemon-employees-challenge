import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LinkImage = styled.img`
  width: 30rem;
  
  &:hover{
    width: 31rem;
  }
`;

export { PageWrapper, LinkImage }