import styled from "styled-components";

type ContainerAvatarProps = {
  width?: number;
  height?: number;
};
type ImageAvatarProps = {
  width?: number;
  height?: number;
};

export const ContainerAvatar = styled.div<ContainerAvatarProps>`
  width: ${(props) => props.width ?? 49.09}px;
  height: ${(props) => props.height ?? 49.09}px;
  background-color: #000;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.2rem solid #00b37e;

  border-radius: 1rem;
`;

export const ImageAvatar = styled.img<ImageAvatarProps>`
  width: ${(props) => props.width ?? 49.09}px;
  height: ${(props) => props.height ?? 49.09}px;
`;
