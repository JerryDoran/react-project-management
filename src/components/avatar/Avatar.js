// styles & images
import { AvatarContainer } from './Avatar.styled';

export default function Avatar({ src, width, height }) {
  return (
    <AvatarContainer>
      <img
        src={src}
        alt='profile pic'
        style={{ width: width, height: height }}
      />
    </AvatarContainer>
  );
}
