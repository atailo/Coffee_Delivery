import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Delivery } from './pages/Delivery/Delivery'
import { Checkout } from './pages/Checkout/Checkout'
import { DefaltLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaltLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
