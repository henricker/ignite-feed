import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #202024;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 0rem;

  @media screen and (max-width: 670px) {
    justify-content: space-around;

    img {
      width: 170px;
      height: 50px;
    }
  }
`;
