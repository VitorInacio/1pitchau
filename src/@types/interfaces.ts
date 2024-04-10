export interface ICarrinho {
  "id": number,
  "nome": string,
  "valor": string,
  "promo": string,
  "id_categoria": number,
  "promoNumber": string,
  "imagemg": string,
  "imagemp": string,
  "quantidade": number,
  "total": number
  // Exemplo de como permitir uma variável ficar indefinida --> "nome"?: string
}
