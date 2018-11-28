import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormSelect from './Select';
// import MenuItem from '@material-ui/core/MenuItem';

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
        const playersAmount = [
            {value: 1, valueName: 1},
            {value: 2, valueName: 2},
            {value: 3, valueName: 3},
            {value: 4, valueName: 4}
        ];

        return (
            <aside className="sidebar">
                <form className="form" autoComplete="off">
                    <FormControl fullWidth>
                        <InputLabel htmlFor="filter-players">Players</InputLabel>
                        <FormSelect
                            value={this.state.players}
                            options={playersAmount}
                            onChange={this.handleChange}
                        >
                        </FormSelect>
                    </FormControl>
                </form>
            </aside>
        );
    }
}

export default Sidebar;
