import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Saude from './Saude.jsx'
import Fitness from './Fitness.jsx'
import BemEstar from './BemEstar.jsx'
import Sobre from './Sobre.jsx'
import Contato from './Contato.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="saude" element={<Saude />} />
        <Route path="fitness" element={<Fitness />} />
        <Route path="bem-estar" element={<BemEstar />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App

