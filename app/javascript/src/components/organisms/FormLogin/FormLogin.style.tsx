import styled from "styled-components";

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
  color: #091F6C;
  min-height: 100vh;
  -webkit-align-items: center;
  justify-content: center;

  h2 {
    color: #1739a5;
  }
`;

export const ButtonLogin = styled.button`
  height: 50px;
  background: rgb(15 153 103);
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  margin: 20px 0px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: rgb(7 120 84);
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
