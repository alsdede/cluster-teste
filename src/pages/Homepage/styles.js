import styled from 'styled-components';

export const Container = styled.div`
  .sc-main {
    display: flex;
    flex: 1;
    height: calc(100vh - 11rem);
    flex-direction: column;
    padding: 2rem 4rem;
    @media screen and (max-width: 480px) {
      padding: 2rem;
    }
  }
  header {
    height: 11rem;
    width: 100%;

    .logo-title {
      color: var(--primary);
      padding: 1rem 4rem;

      @media screen and (max-width: 480px) {
        padding: 1rem 2rem;
      }
    }
  }
`;

export const BottomContent = styled.div`
  display: flex;

  min-height: 17rem;
  max-height: 30rem;
  margin-top: 2rem;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
