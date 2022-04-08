const formatCurrency = (number) => {
  return new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }
  ).format(number)
}

export { formatCurrency }
