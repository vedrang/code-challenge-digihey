import { Button, Input, Spacer, Text,Container } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCAL_STORE_KEY } from "./util";

export const EncoderPage = () => {
  const navigate = useNavigate();

  const verifyToken = () => {
    const token = localStorage.getItem(TOKEN_LOCAL_STORE_KEY);
    if (token === null) {
      navigate("/login");
    }
    return token;
  }

  useEffect(() => {
    verifyToken();
  });
  const [input, setString] = useState("XXXYYYYZZQXX");
  const [encOutput, setEncOutput] = useState("");
  const encoderFn = async () => {
    const token = verifyToken();
    const res = await fetch(`http://localhost:3000/encode?value=${input}`, {
      method: "GET",
      headers: { Authorization: token },
    });
    const encodedOutput = await res.json();
    return setEncOutput(encodedOutput);
  };

  return (
   <div>
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:'300px'
      }}
    >
      <Input
        value={input}
        bordered
        size="lg"
        placeholder="xLarge"
        labelPlaceholder="Please write a string"
        color="default"
        bold
        width="295px"
        onChange={(e) => setString(e.target.value)}
      />
      <Spacer/>
      <Button auto size="lg" onPress={() => encoderFn()}>
        Encode
      </Button>
      </Container>
     <Container  style={{
        display: "flex",
        justifyContent: "center",
        marginTop:'50px'
      }}>
     <Text size="$xl">Result: </Text>
     <Spacer/>
     <Text size="$xl">{encOutput}</Text>
     </Container>
     </div>
     )
};
