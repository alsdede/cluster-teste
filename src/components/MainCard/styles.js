import styled from 'styled-components';
import backgroundSection from '../../assets/bg.png';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 20rem;
  background: url(${backgroundSection}) no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
  color: var(--white);
  padding: 5rem;
  justify-content: flex-end;

  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: padding 0.2s;
  transition: box-shadow 0.5s;

  &:hover {
    -webkit-box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 3px 4px -3px rgba(0, 0, 0, 0.75);
  }

  h1 {
    font-size: 3.5rem;
    max-width: 50rem;
  }
  p {
    margin-top: 2rem;
    overflow: hidden;
    font-size: 2rem;
    max-width: 50rem;
  }

  @media screen and (max-width: 480px) {
    padding: 2rem;
    background: url(${backgroundSection}) no-repeat center;
    background-size: auto;
    min-height: 30rem;
  }
  @media screen and (max-height: 600px) {
    padding: 2rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
