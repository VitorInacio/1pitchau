import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Contato } from './pages/Contatar'
import { Produtos } from './pages/Produtos'
import { HomeContatos } from './pages/Contatos'
import { ShowContato } from './pages/Contato'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
        <Route
          path='/contato'
          element={<Contato />}
        />
        <Route
          path='/contatos'
          element={<HomeContatos />}
        />
        <Route
          path='/contato/:id'
          element={<ShowContato />}
        />
        <Route
          path='/produto/:id'
          element={<Produtos />}
        />
      </Routes>
    </BrowserRouter>
  )
}
