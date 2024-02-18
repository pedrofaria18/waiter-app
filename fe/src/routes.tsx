import { Route, Routes as Switch } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { OrdersHistory } from './pages/OrdersHistory';
import { Menu } from './pages/Menu';
import { Users } from './pages/Users';
import { Perfil } from './pages/Perfil';

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/orders-history" element={<OrdersHistory />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/users" element={<Users />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Switch>
  );
}
