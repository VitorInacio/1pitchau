
import { useNavigate } from "react-router-dom";
import { Button, CardBody, TextButton, Title } from "./styles";

interface IProps {
  "id": number;
  "nome": string;
  "cidade": string;
}

export const CardContato = (props: IProps) => {

  const navigate = useNavigate();

  return (
    <CardBody>
      <Title>{props.nome}</Title>
      <p>{props.cidade}</p>
      <Button onClick={() => {
        navigate('/contato/' + props.id)
      }} >
        <TextButton>Detalhes</TextButton>
      </Button>
    </CardBody>

  )
}
