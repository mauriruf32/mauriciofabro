// src/components/ToggleSwitch.js
import React, { Component } from 'react';
import './toggleSwitch.css'; // Añadir estilos según sea necesario

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));

    // Aquí puedes manejar lógica adicional según el estado del interruptor
  };

  render() {
    return (
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleToggle}
        />
        <span className="slider"></span>
      </label>
    );
  }
}

export default ToggleSwitch;
