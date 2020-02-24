const setColors = (status: string) => {
  switch(status) {
      case 'pending':
          return 'secondary'
      case 'disabled':
          return 'error'
      case 'paid':
          return 'primary'
      default:
          return 'initial'
  }
}
export default setColors