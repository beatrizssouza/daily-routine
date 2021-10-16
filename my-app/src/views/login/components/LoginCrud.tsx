import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { UserDTO } from "../../../common/data/UserDTO";
import UserRequest from "../../../services/microservices/UserRequest";
import {
  LoginBox,
  Form,
  InputStyle,
  UserGrid,
  PasswordGrid,
  ButtonDiv,
  Button,
  Container,
  Title,
  Span,
} from "./LoginCardBase";

export default function LoginCrud() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");

  function addingUser() {
    const user: UserDTO = {
      name: name,
      usuario: userName,
      birthDate: date.toString(),
      password: password,
    };

    console.log(user);
    UserRequest.sendUser(user)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Container>
        <LoginBox>
          <Form>
            <Title> Cadastra-se </Title>
            <UserGrid>
              <Span style={{ marginBottom: "-4px" }}>Nome </Span>
              <Span style={{ flexDirection: "row-reverse" }}>
                Data de Nascimento
              </Span>
              <InputStyle
                id={"name"}
                value={name}
                onChange={(p) => setName(p.target.value)}
                type="text"
                autoFocus={true}
                placeholder="Nome"
                style={{ width: "55%", marginRight: "5px" }}
              />
              <InputStyle
                id={"date"}
                value={date}
                onChange={(p) => setDate(p.target.value)}
                type="date"
                style={{ width: "40%", marginLeft: "6px" }}
              />
            </UserGrid>
            <UserGrid>
              <Span> Usuário </Span>
              <InputStyle
                id={"username"}
                value={userName}
                onChange={(p) => setUserName(p.target.value)}
                type="text"
                placeholder="Usuário"
              />
            </UserGrid>
            <PasswordGrid>
              <Span> Senha</Span>
              <InputStyle
                id={"password"}
                value={password}
                onChange={(p) => setPassword(p.target.value)}
                type="password"
                placeholder="Senha"
              ></InputStyle>
            </PasswordGrid>

            <ButtonDiv>
              <Button
                onClick={() => {
                  addingUser();
                }}
              >
                Cadastrar
              </Button>
            </ButtonDiv>
          </Form>
        </LoginBox>
      </Container>
    </div>
  );
}
