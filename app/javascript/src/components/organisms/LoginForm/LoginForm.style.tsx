import styled from "styled-components";
import { colors } from '@src/colors';

export const WrapForm = styled.div`
  padding: 3rem;
  min-width: 450px;
  margin: 0 0 0 48px;
  max-height: 800px;
  max-width: 500px;
  box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  color: ${colors.ivoryWhite};
  min-height: 100vh;
  -webkit-align-items: center;
  justify-content: center;

  h2 {
    color: ${colors.navy};
    text-align: center;
  }
`;

export const ButtonLogin = styled.button`
  height: 50px;
  background: ${colors.green};
  border: none;
  border-radius: 10px;
  color: ${colors.white};
  width: 100%;
  margin: 20px 0px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: ${colors.darkGreen};
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  }
`

export const ButtonFaceBookLogin = styled.button`
  height: 40px;
  background: rgb(23 119 242);
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: rgb(42 89 149);
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  }
`;

export const LabelInput = styled.label`
  display: block;
  color: #091F6C;
  font-size: 0.75rem;
  font-weight: bold;
  margin: 30px 0 10px 0
`;

export const LoadingSpan = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
