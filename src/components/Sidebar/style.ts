import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: #202024;
  width: 20rem;
  height: 18.375rem;

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 4.5rem;
`;
