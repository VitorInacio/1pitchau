import { useEffect, useState } from "react";
//import { Card } from "../../components/Card"
import { Menu } from "../../components/Menu"
import axios, { AxiosError } from "axios";
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./styles";

interface IDataCard {
  "id": number;
  "nome": string;
  "preco": string;
  "promo": string;
  "imagem": string;
}

export const Home = () => {

  const [dataCard, setDataCard] = useState<Array<IDataCard>>([])

  useEffect(() => {

    axios.get('http://localhost:3000/produtos')
      .then((res) => {
        setDataCard(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })


  }, [])

  return (
    <>
      <Menu />
      <div style={{ paddingLeft: '6%', paddingRight: '6%' }}>

        <h2>Produtos em destaque:</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

        {
          dataCard.map((card) => {
            return(
              <CardBody key={card.id}>
              <img src={card.imagem} alt="" />
              <Title>{card.nome}</Title>
              <TitlePreco>{card.preco}</TitlePreco>
              <TextPromo>{card.promo}</TextPromo>
              <Button>
                <TextButton>Detalhes</TextButton>
              </Button>
            </CardBody>
            )
          })
        }

        </div>
      </div>


    </>
  )
}
