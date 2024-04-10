export const formataValorBR = (valor?: number | null) => {
  if (valor) {
    return 'R$' + valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  return 'R$ 0,00'
}
