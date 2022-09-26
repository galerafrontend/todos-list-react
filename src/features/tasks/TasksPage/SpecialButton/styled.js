import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerIcon } from "./loading_icon.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(SpinnerIcon)`
  animation: ${rotate} 1s linear infinite;
  vertical-align: middle;
`;