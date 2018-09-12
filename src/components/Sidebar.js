import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: ''
        }
    }

    handleChange = () => {
        console.log('change');
    };

    render() { 
        return (
            <aside className="sidebar">
                <form className="form" autoComplete="off">
                <FormControl fullWidth>
                    <InputLabel htmlFor="filter-players">Players</InputLabel>
                    <Select
                    value={this.state.players}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'filter-players',
                    }}
                    autoWidth
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
                </form>
            </aside>
        );
    }
}
 
export default Sidebar;