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

    // Puedes usar el estado actualizado para cambiar el tema aquí
    const theme = this.state.isChecked ? 'dark' : 'light';
    // Llamar a una función del padre para cambiar el tema
    this.props.onThemeChange(theme);
  };

  render() {
    return (
      <label className={`toggle-switch ${this.state.isChecked ? 'dark' : 'light'}`}>
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
