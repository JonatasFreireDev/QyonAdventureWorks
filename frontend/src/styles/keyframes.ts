import { keyframes } from 'styled-components';

export const appearFromRight = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}to{
  opacity: 1;
  transform: translateX(0px);
}`;

export const appearFromNothing = keyframes`
from{
  opacity: 0;
}to{
  opacity: 1;
}`;

export const appearFromTop = keyframes`
from{
  opacity: 0;
  transform: translateY(-50px);
}to{
  opacity: 1;
  transform: translateY(0px);
}`;

export const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;