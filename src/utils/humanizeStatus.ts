const humanizeStatus = (status: string) => {
    switch(status) {
        case 'pending':
            return 'Проверка оплаты'
        case 'disabled':
            return 'Отменен'
        case 'paid':
            return 'Оплачен'
        case 'deleted':
            return 'Удален'
        case 'closed':
            return 'Закрыт'
        case 'active':
            return 'Активный'
        case 'declined':
            return 'Отказ'
        case 'sent':
            return 'Отправлен'
        case 'delivered':
          return 'Доставлен'
        case 'error':
            return 'Ошибка оплаты'
        default:
            return ''
    }
  }
  export default humanizeStatus
  