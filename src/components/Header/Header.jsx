import React from 'react';
import './index.scss';

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
    </div>
  );
};

export default Header;