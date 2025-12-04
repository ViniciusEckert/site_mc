import menuImg from '../public/hamburguer_menu.png'
import logoImg from '../public/logo.png'
import alfineteImg from '../public/alfinete.png'
import motoboyImg from '../public/motobot.png'

//import { useState, useEffect } from 'react'
import s from './App.module.css'
import { Card } from './components/card'

function App() {
  
  return (
    <>
      <div className={s.menu}>
        <div className={s.top}>
         <img className={s.MenuIcon} src={menuImg} alt="imagem1" />
         <img className={s.logo} src={logoImg} alt="logo" />
         <p className={s.cadastro}>Entrar</p>
        </div>
        <div className={s.down}>
          <h2>Como você quer seu pedido hoje?</h2>
          <div className={s.botoes}>
            <div className={s.esquerda}>
             <img src={alfineteImg} alt="ponto de chegada"/>
              <p>Peça e Retire</p>
            </div>
            <div className={s.direita}>
             <img src={motoboyImg} alt="motoboy"/>
              <p>McDelivery</p>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
