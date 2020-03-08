import React from 'react'
import CloseButton from '../CloseButton'
import useStyles from './styles'

interface IProps {
  title?: string,
  onClose: () => void,
}

const Header = ({ title, onClose }: IProps) => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      {title && <div className={classes.title}>{title}</div>}
      <CloseButton onClose={onClose} />
    </div>
  )
}

export default Header
