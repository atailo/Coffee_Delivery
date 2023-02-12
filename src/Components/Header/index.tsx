import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/headerLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Clique para ir para pág. Inicial">
        <img src={headerLogo} alt="" />
      </NavLink>
      <div>
        <button>
          <span>
            <MapPin size={28} weight="fill" />
          </span>
          ABC Paulista, SP
        </button>

        <nav>
          <NavLink to="/checkout" end title="Clique para ir para o carrinho">
            <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
