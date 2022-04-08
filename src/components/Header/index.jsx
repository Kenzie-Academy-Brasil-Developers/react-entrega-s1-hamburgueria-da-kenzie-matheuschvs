import { useState } from 'react'

import logo from '../../assets/logo.svg'

import './style.css'

const Header = ({ showProducts }) => {
  const [searchText, setSearchText] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Burguer Kenzie' />
      <div
        className={`input ${inputFocus ? 'input--focus' : ''}`}
      >
        <input
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          className='input__field'
          type='text'
          placeholder='Digitar Pesquisa'
        />
        <button
          className='input__search'
          onClick={() => showProducts(searchText)}
        >
          Pesquisar
        </button>
      </div>
    </header>
  )
}

export { Header }
