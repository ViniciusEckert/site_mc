import menuImg from '../public/hamburguer_menu.png'
import logoImg from '../public/logo.png'
import alfineteImg from '../public/alfinete.png'
import motoboyImg from '../public/motoboy.png'

//import { useState, useEffect } from 'react'
import s from './App.module.css'


function App() {
  
  return (
    <>
    <div className={s.top}>
      <nav className={s.menu}>
        <div className={s.left}>   
          <img className={s.menuIcon} src={menuImg} alt="imagem1" />
           <img className={s.logo} src={logoImg} alt="logo" />
         </div>  
         <div className={s.cadastro}>
          <p>Entrar</p>
         </div>
      </nav>
      </div>
        <main>
          <section className={s.s1} id='s1'>
            
          </section>
        </main>
    </>
  )
}

export default App
