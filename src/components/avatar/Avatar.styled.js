import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* object-fit: cover; */
  }
`;
