import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import useStyles from './styles'

interface IProps {
  onClose: () => void,
}

const CloseButton = ({ onClose }: IProps) => {
  const classes = useStyles()
  return (
  <div className={classes['close-button']} onClick={onClose}><CloseIcon /></div>
)}

export default CloseButton
