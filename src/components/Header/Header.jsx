import React, { useState } from 'react';
import './index.scss';
import lightIcon from "../../../public/light.svg";
import nightIcon from "../../../public/night.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`Headerr ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='Headerr__organizacao'>
        <h3>Organização</h3>
      </div>
      <div className='Headerr__tarefas'>
        <h2>Tarefas</h2>
        <div className='caixa-tarefa'></div>
      </div>
      <div className='dark-mode-toggle'>
        <button onClick={toggleDarkMode}>
          <img src={isDarkMode ? nightIcon : lightIcon} alt="Modo Claro/Escuro" />
        </button>
      </div>
    </div>
  );
};

export default Header;