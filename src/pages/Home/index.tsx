import { useEffect, useState } from "react";
import { Card } from "../../components/Card"
import { Menu } from "../../components/Menu"
import axios, { AxiosError } from "axios";

interface IDataProduto {
  "id": number,
  "nome": string,
  "valor": string,
  "promo": string,
  "id_categoria": number,
  "promoNumber": string,
  "imagemg": string,
  "imagemp": string

}

export const Home = () => {

  const [dataProduto, setDataProduto] = useState<Array<IDataProduto>>([])

  useEffect(() => {

    axios.get('http://localhost:3000/produtos')
      .then((res) => {
        setDataProduto(res.data)
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
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

      {
        dataProduto.map((produto) => {
          return(
            <Card
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              preco={produto.valor}
              promo={produto.promo}
              imagem={"https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/" + produto.imagemp}
            />
          )
        })
      }

        </div>
      </div>


    </>
  )
}
