import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

const useStyles = makeStyles(() => ({
    paper: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        '& .MuiTextField-root': {
            margin: '15px',
        },
    },
    avatar: {
        backgroundColor: red[300],
        margin: '15px',
    },
    form: {
        width: '100%',
        marginTop: '13px'
    },
    submit: {
        marginTop: '13px',
    },
    googleButton: {
        marginTop: '15px',
        marginBottom: '15px',
        
    },
}))

export default useStyles