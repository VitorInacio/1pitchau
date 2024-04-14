import { FormEvent, useState } from "react";
import { Menu } from "../../components/Menu"
import { FormContainer } from "./styles"
import { Link } from "react-router-dom";

export const Contato = () => {

  const [dadosContato, setDadosContato] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    mensagem: ""
  });

  const saveDadosContato = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDadosContato({ ...dadosContato, [name]: value });
  };


  const salvarContato = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {

      const response = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosContato)
      });
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        setDadosContato({
          nome: "",
          telefone: "",
          email: "",
          cidade: "",
          mensagem: ""
        });
      } else {
        console.error("Erro ao enviar dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <>
      <Menu />
      <FormContainer onSubmit={salvarContato}>


        <h1>Contato</h1>
        <p>Preencha o formulário</p>
        <br />

          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" id="nome" required value={dadosContato.nome} onChange={saveDadosContato} placeholder="Nome" /> <br />

          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" name="telefone" id="telefone" required value={dadosContato.telefone} onChange={saveDadosContato} placeholder="44999999999" maxLength={11} /> <br />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required value={dadosContato.email} onChange={saveDadosContato} placeholder="email@gmail.com" /> <br />

          <label htmlFor="cidade">Cidade</label>
          <select name="cidade" id="cidade" required value={dadosContato.cidade} onChange={saveDadosContato}>
            <option value="">Selecione uma cidade</option>
            <option value="umuarama">Umuarama</option>
            <option value="maringa">Maringá</option>
            <option value="douradina">Douradina</option>
          </select> <br />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea name="mensagem" id="mensagem" required value={dadosContato.mensagem} onChange={saveDadosContato} placeholder="Digite aqui sua mensagem"></textarea> <br />

          <button type="submit" style={{ color: "white", backgroundColor: "blue" }}>Enviar</button> <br /> <br />
          <Link to={"/contatos"} style={{ padding: 10, backgroundColor: "green", color: "white", textDecoration: "none", borderRadius: "10px" }}>Ver todos os contatos</Link>


      </FormContainer>
    </>

  )
}
