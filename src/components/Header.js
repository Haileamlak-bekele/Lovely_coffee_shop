import react from 'react'
import './HeaderStyle.css'
 function Header(){
  return(
    <div>
      <header>
        <p className='logo'>LoMoCo</p>
        <nav>
          <ul className='navUl'>
            <li><a href='/Home'>Home</a></li>
            <li><a href='/service'>Serviece</a></li>
            <li><a href='/Menu'>Our menu</a></li>
            <li><a href='#'>Store Hours</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </div>

  )
 }
 export default Header