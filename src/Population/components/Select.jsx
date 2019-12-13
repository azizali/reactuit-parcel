import React from 'react';

export default class SelectYear extends React.Component {
  render() {
    return (
      <div>
        {this.props.label}
        <select
          onChange={this.props.handleChange}
          value={this.props.selection}
        >
          {this.props.option.map((item) => <option value={item}>{item}</option>)}
        </select>
      </div>
    );
  }
}
