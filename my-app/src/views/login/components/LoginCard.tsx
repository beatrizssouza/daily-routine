import { useState } from "react";
import { useHistory } from "react-router";
import {
  LoginBox,
  Logo,
  Form,
  InputStyle,
  UserGrid,
  PasswordGrid,
  ButtonDiv,
  Button,
  LinkPassword,
} from "./LoginCardBase";
import LogoIcon from "../../../common/images/daily-routines-and-habits.png";

export default function LoginCard() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  return (
    <div>
      <LoginBox>
        <Logo src={LogoIcon} />
        <Form>
          <UserGrid>
            <InputStyle
              id={"UserTeste"}
              value={userName}
              onChange={(p) => setUserName(p.target.value)}
              type="text"
              autoFocus={true}
              placeholder="Usuário"
            />
          </UserGrid>
          <PasswordGrid>
            <InputStyle
              id={"PasswordTeste"}
              value={password}
              onChange={(p) => setPassword(p.target.value)}
              type="password"
              placeholder="Senha"
            ></InputStyle>
          </PasswordGrid>

          <ButtonDiv>
            <Button>Entrar</Button>
          </ButtonDiv>
          <LinkPassword
            onClick={() => {
              history.push("/cadastro");
            }}
          >
            Cadastre-Se
          </LinkPassword>
        </Form>
      </LoginBox>
    </div>
  );
}
