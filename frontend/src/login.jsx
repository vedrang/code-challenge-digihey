import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import { TOKEN_LOCAL_STORE_KEY } from "./util";
import { z } from "zod";

const hasAtLeastOneNumber = (string) => {
  for (let char of string.split("")) {
    if (!isNaN(Number(char))) {
      return true;
    }
  }
  return false;
};

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).refine(hasAtLeastOneNumber),
});

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "optimus.prime@autobots.com",
    password: "validPassword1234!",
  });

  const { email, password } = credentials;

  useEffect(() => {
    const result = validationSchema.safeParse(credentials);
    setIsValid(result.success);
  }, [credentials]);

  const authFn = async () => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });
    const { token } = await res.json();
    localStorage.setItem(TOKEN_LOCAL_STORE_KEY, token);
    navigate("/encoder");
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Grid>
        <Input
          value={email}
          bordered
          type="email"
          color="default"
          label="Email:"
          width="295px"
          onChange={(e) =>
            setCredentials({
              email: e.target.value.toLocaleLowerCase(),
              password,
            })
          }
        />
        <Spacer />
        <Input.Password
          value={password}
          bordered
          color="default"
          label="Password:"
          onChange={(e) => setCredentials({ email, password: e.target.value })}
        />
        <Spacer />
        {!isValid ? (
          <Text color="error">
            Email or password are invalid!
          </Text>
        ) : undefined}
        <Spacer/>
        <Button onPress={() => authFn()}>Submit</Button>
      </Grid>
    </Container>
  );
};
