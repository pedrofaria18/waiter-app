import { ReactNode, useState } from 'react';

import { Category } from './components/Category';
import { Product } from './components/Product';

import { Container, MenuNavigation } from './styles';

const menu: Record<string, ReactNode> = {
  products: <Product />,
  categories: <Category />,
};

export function Menu() {
  const [menuSelected, setMenuSelected] = useState('products');

  function handleChangeMenu(menu: string) {
    setMenuSelected(menu);
  }

  return (
    <Container>
      <MenuNavigation>
        {['products', 'categories'].map((item) => (
          <button
            key={item}
            className={menuSelected === item ? 'active' : ''}
            onClick={() => handleChangeMenu(item)}
          >
            {item === 'products' ? 'Produtos' : 'Categorias'}
          </button>
        ))}
      </MenuNavigation>

      <hr />

      {menu[menuSelected]}
    </Container>
  );
}
