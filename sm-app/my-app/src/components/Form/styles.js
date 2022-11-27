import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    root: {
        margin: '5px',
    },
    paper: {
      padding: '5px',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
      backgroundColor: 'red',
    },
  }));

  export default useStyles