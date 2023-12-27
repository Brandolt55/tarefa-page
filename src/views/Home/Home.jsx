import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header';
import Tarefa from '../../components/Tarefa/Tarefa';

const Home = () => {
  return (
    <div className='Homepage'>
      <Header/>
      <Tarefa/>
    </div>
  )
}

export default Home;
