import { useEffect, useState } from "react";
import { CardContato } from "../../components/CardContato"
import { Menu } from "../../components/Menu"
import axios, { AxiosError } from "axios";

interface IDataContato {
  "id": number,
  "nome": string,
  "telefone": string,
  "email": string,
  "cidade": string,
  "mensagem": string,
}

export const HomeContatos = () => {

  const [dataContato, setDataContato] = useState<Array<IDataContato>>([])

  useEffect(() => {

    axios.get('http://localhost:3000/contatos')
      .then((res) => {
        setDataContato(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })


  }, [])

  return (
    <>
      <Menu />
      <div style={{ paddingLeft: '6%', paddingRight: '6%' }}>

        <h2>Todos os contatos:</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

      {
        dataContato.map((contato) => {
          return(
            <CardContato
              key={contato.id}
              id={contato.id}
              nome={contato.nome}
              cidade={contato.cidade}
            />
          )
        })
      }

        </div>
      </div>


    </>
  )
}
