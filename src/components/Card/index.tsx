
import { useNavigate } from "react-router-dom";
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./styles";

interface IProps {
  "id": number;
  "nome": string;
  "preco": string;
  "promo": string;
  "imagem": string;
}

export const Card = (props: IProps) => {

  const navigate = useNavigate();

  return (
    <CardBody>
      <img src={props.imagem} />
      <Title>{props.nome}</Title>
      <TitlePreco>{props.preco}</TitlePreco>
      <TextPromo>{props.promo}</TextPromo>
      <Button onClick={() => {
        navigate('/produto/' + props.id)
      }} >
        <TextButton>Detalhes</TextButton>
      </Button>
    </CardBody>

  )
}
