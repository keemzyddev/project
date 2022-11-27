import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    appBarSearch: {
        borderRadius:4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse'
        },
        
    },
    tagsInputContainer: {
        border: '2px solid #000',
        padding: '.5em',
        borderRadius: '3px',
        width: 'min(80vw, 160px)',
        marginTop: '1em',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '.5em',
    },
    
    tagItem: {
        backgroundColor: 'rgb(218, 216, 216)',
        display: 'inline-block',
        padding: '.5em .75em',
        borderRadius: '20px',
    },
    tagItemClose: {
        height: '20px',
        width: '20px',
        backgroundColor: 'rgb(48, 48, 48)',
        color: '#fff',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '.5em',
        fontSize: '18px,',
        cursor: 'pointer',
    },
    
    tagsInput: {
        flexGrow: 1,
        padding: '.5em 0',
        border: 'none',
        outline: 'none',
        marginBottom: '5px',
    },
    searchButton: {
        margin: '5px',
    }
}))

export default useStyles