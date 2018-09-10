import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            name: 'name'
        }
    }
    render() { 
        return (
            <aside className="sidebar">
                <form className="form" autoComplete="off">
                <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                    autoWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </form>
            </aside>
        );
    }
}
 
export default Sidebar;