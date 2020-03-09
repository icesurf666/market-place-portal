import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  middle: {
    marginLeft: 3,
    color: '#ffa500',
    fontSize: 20,
    fontWeight: 900,
  },
  low: {
    marginLeft: 3,
    color: '#ff0000',
    fontSize: 20,
    fontWeight: 900,
  },
  high: {
    marginLeft: 3,
    color: '#8bc53f',
    fontSize: 20,
    fontWeight: 900,
  },
  root: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontSize: 16,
  }
})

interface IProps {
  amount: number,
}

const Availability = ({amount}: IProps) => {
  const classes = useStyles()
  const available = (amount: number) => {
  if(amount < 100) {
    return (
      <div className={classes.low}>
        |
      </div>
    )
  }
  if(amount < 500) {
    return (
      <div className={classes.middle}>
        |||
      </div>
    )
  }
  if(amount > 500) {
    return (
      <div className={classes.high}>
        |||||
      </div>
    )
  }
}
  return (
    <div className={classes.root}>
      <span className={classes.title}>Доступно:</span>{available(amount)}
    </div>
  )
}

export default Availability