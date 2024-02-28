import { FormContainer } from "./styles"


export const Contato = () => {

  return (
    <>
      <FormContainer>
        <h1>Contato</h1>
        <p>Site feito em aula</p>

        <form action="submit">
          <label htmlFor="nome">Nome:</label> <br />
          <input type="text" name="nome" id="nome" required placeholder="Nome" /> <br />

          <label htmlFor="telefone">Telefone:</label> <br />
          <input type="number" name="telefone" id="telefone" required placeholder="44999999999" pattern="^\(\d{2}\)\d{4,5}-\d{4}$" maxLength={11} /> <br />

          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="email" required placeholder="email@gmail.com" /> <br />

          <label htmlFor="cidade">Cidade</label> <br />
          <select name="cidade" id="cidade" required >
            <option value="">Selecione uma cidade</option>
            <option value="umuarama">Umuarama</option>
            <option value="maringa">Maringá</option>
            <option value="douradina">Douradina</option>
          </select> <br />

          <label htmlFor="mensagem">Mensagem:</label> <br />
          <textarea name="mensagem" id="mensagem" required placeholder="Digite aqui sua mensagem"></textarea> <br />

          <button type="submit">Enviar</button>
        </form>
      </FormContainer>
    </>

  )
}
