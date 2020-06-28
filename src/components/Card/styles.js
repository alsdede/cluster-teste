import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4rem;
  background: var(--gray);
  color: var(--black);
  justify-content: center;

  overflow: hidden;
  text-overflow: ellipsis;
  transition: padding 0.2s;
  transition: box-shadow 0.5s;

  &:hover {
    -webkit-box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
  }

  cursor: pointer;

  h2 {
    font-size: 2rem;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  & + div {
    margin-left: 3rem;
  }

  @media screen and (max-width: 480px) {
    padding: 2rem;
    margin-top: 2rem;
    min-height: 30rem;
    justify-content: flex-end;
    & + div {
      margin-left: 0px;
    }
  }
  @media screen and (max-height: 600px) {
    padding: 2rem;
  }
`;
