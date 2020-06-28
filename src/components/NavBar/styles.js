import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--primary);
  padding: 1rem 4rem;
  overflow: hidden;
  position: relative;

  button {
    background: transparent;
    border: none;
    border-radius: 4px;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: none;
  }
  ul {
    display: flex;

    li {
      margin-right: 20px;
    }
  }

  ul,
  li,
  a {
    list-style: none;
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--white);
  }
  a:hover,
  a:active {
    color: var(--active);
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #ff9933;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  padding: 0 16px;

  z-index: 999;

  transform: translateX(-100%);
  transition: transform ease-out 1s;

  ul,
  li,
  a {
    list-style: none;
    font-size: 2.4rem;
    text-decoration: none;
    color: var(--white);
  }
  a:hover {
    color: var(--active);
  }
  @media screen and (max-width: 480px) {
    margin-top: 15px;
    transform: translateX(-100%);
    transition: transform ease-out 0.3s;
    transform: ${(props) =>
      props.openToogle ? 'translateX(0)' : 'translateX(-100%)'};

    li {
      margin-top: 5px;
    }
  }

  .sb-close {
    border: 0;
    background: transparent;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;
