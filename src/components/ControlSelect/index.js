import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class ControlSelect extends Component {
    render() { 
        return (
            <Select
                value={this.props.value}
                onChange={this.props.onChange}
                inputProps={this.props.inputProps}
            >
            {this.props.options.map((item, index) => {
                return <MenuItem value={item.value} key={index}>{item.valueName}</MenuItem>
            })}
        </Select>
        );
    }
}
 
export default ControlSelect;