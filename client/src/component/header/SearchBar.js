import { makeStyles, fade, InputBase } from "@material-ui/core";
import { Search } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',

    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'blue',
    },
    inputRoot: {
        fontSize: 13,
        fontWeight: 700,
        // color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingLeft: 20,
    },
}))

const SearchBar = () => {
    const classes = useStyle();

    return (
        <div className={classes.search}>

            <InputBase
                placeholder="Searh for products, brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>
        </div>
    )
}
export default SearchBar;