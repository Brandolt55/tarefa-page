import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header';
import Tarefa from '../../components/Tarefa/Tarefa';
import Footer from '../../components/Section/section'

const Home = () => {
  return (
    <div className='Homepage'>
      <Header/>
      <Tarefa/>
      <Footer/>
    </div>
  )
}

export default Home;
