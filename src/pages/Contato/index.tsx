/* eslint-disable prefer-const */
import { Link, useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Col4, Col6, Row } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"

interface IDataContato {
  "id": number,
  "nome": string,
  "telefone": string,
  "email": string,
  "cidade": string,
  "mensagem": string,
}

export const ShowContato = () => {

  const { id } = useParams()
  const [contato, setContato] = useState<IDataContato>()

  useEffect(() => {
    axios.get('http://localhost:3000/contatos?id=' + id)
    .then((dados) => {
      setContato(dados.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }, [id])


  return(
    <>
      <Menu />
      <div style={{paddingLeft: '6%', paddingRight: '6%', marginTop: 20, marginBottom: 40}}>
        {
          contato ?
          <>
            <h1>Contato</h1>
            <Row>
              <Col4>
                <br />
                <h3 style={{padding: 10}}>{contato.nome}</h3>
                <p style={{padding: 10}}>{contato.cidade}</p>
                <p style={{padding: 10}}>{contato.email}</p>
                <p style={{padding: 10}}>{contato.telefone}</p>
              </Col4>
              <Col6>
                <h4>Mensagem:</h4>
                <p style={{ marginTop: 10}}> {contato.mensagem}</p>
              </Col6>
            </Row>
            <br />
            <Link to={"/contatos"} style={{ padding: 10, backgroundColor: "blue", color: "white", textDecoration: "none", borderRadius: "10px" }}>Voltar</Link>
          </>
          :
          <h2>Nenhum Contato encontrado</h2>
        }


      </div>
    </>
  )
}
