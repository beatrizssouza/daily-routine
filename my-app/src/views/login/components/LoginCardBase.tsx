import styled from "styled-components";
import backgroundGuest from "../../../common/images/backgroundImagem.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${backgroundGuest});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background-color: white;
  width: 32em;
  height: 36em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
`;

export const Logo = styled.img`
  height: 11em;
  width: 15em;
  justify-self: center;
`;
export const InputStyle = styled.input`
  font-family: sans-serif;
  font-size: 20px;
  background-color: white;
  width: 23em;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #207a76;
  text-indent: 4%;
  margin-bottom: 2%;
  :hover {
    border: 1px solid #6de0db;
  }
  :focus {
    border-color: #6de0db;
    transition: border-color 0.3s ease-in-out;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  margin-top: 5%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #207a76;
  color: white;
  font-family: sans-serif;
  font-size: 19px;
  background-color: #207a76;
  width: 12em;
  height: 3em;
  transition: 0.4s;
  :hover {
    background-color: #207a76;
  }
  font-weight: bold;
`;
export const UserGrid = styled.div`
  padding-bottom: 30px;
`;
export const PasswordGrid = styled.div`
  padding-bottom: 10px;
`;
