import React from 'react';
import './index.scss';
import task from "../../../public/taskicon.svg"

const Header = () => {
  return (
    <div className='Headerr'>
      <div className='Headerr__organizacao'>
        <h3>Organização</h3>
      </div>
      <div className='Headerr__tarefas'>
        <h2>Tarefas</h2>
        <div className='caixa-tarefa'></div>
      </div>
      <img src={task} alt="Ícone de Tarefa" className="task-icon" />
    </div>
  );
};

export default Header;