const humanizeStatus = (status: string) => {
  switch(status) {
      case 'pending':
          return 'Проверка оплаты'
      case 'disabled':
          return 'Отменен'
      case 'paid':
          return 'Оплачен'
      default:
          return ''
  }
}
export default humanizeStatus