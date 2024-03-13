
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./styles";

interface IProps {
  "id": number;
  "nome": string;
  "preco": string;
  "promo": string;
  "imagem": string;
}

export const Card = (props: IProps) => {

  return (
    <CardBody>
      <img src={props.imagem} />
      <Title>{props.nome}</Title>
      <TitlePreco>{props.preco}</TitlePreco>
      <TextPromo>{props.promo}</TextPromo>
      <Button>
        <TextButton>Detalhes</TextButton>
      </Button>
    </CardBody>

  )
}
