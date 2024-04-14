import styled from "styled-components";

export const FormContainer = styled.form `

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

  }

  input {
    width: 25%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    font-size: 1rem;


    &::placeholder {

    }
  }

  textarea {
    width: 25%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    font-size: 1rem;
  }

  select {
    width: 25%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    font-size: 1rem;
  }

  button {
    width: 25%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
