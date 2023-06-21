import styled from "styled-components";

export const NavigationStyle = {
  Container: styled.nav`
    position: fixed;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: top;
    flex-direction: column;
    height: 100vh;
    background: #212922;
    width: 9%;
  `,
  Link: styled.div`
    font-size: 25px;
    text-decoration: none;
    padding: 20px;
    text-align: center;
    background-color: #3e6259;

    transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -webkit-transition: 1s ease-in-out;

    &:hover {
      background-color: #294936;
      transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -webkit-transition: 0.5s ease-in-out;
    }
  `,
};
