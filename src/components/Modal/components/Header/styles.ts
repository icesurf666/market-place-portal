import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 12,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#FAFAFA',
      borderBottom: '2px solid lightgray',
    },
  }),
)

export default useStyles
