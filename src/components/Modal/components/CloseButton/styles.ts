import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'close-button': {
      height: 24,
      cursor: 'pointer',
      alignSelf: 'flex-start',
    },
  }),
)

export default useStyles
