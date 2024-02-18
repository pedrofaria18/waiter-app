import homeIcon from '../../assets/images/home.svg';
import orderIcon from '../../assets/images/order.svg';
import menuIcon from '../../assets/images/menu.svg';
import usersIcon from '../../assets/images/users.svg';
import profileIcon from '../../assets/images/profile.svg';

export const navigations = [
  {
    icon: homeIcon,
    label: 'Home',
    href: '/',
  },
  {
    icon: orderIcon,
    label: 'Histórico',
    href: '/orders-history',
  },
  {
    icon: menuIcon,
    label: 'Cardápio',
    href: '/menu',
  },
  {
    icon: usersIcon,
    label: 'Usuários',
    href: '/users',
  },
];

export const userNavigations = [
  {
    icon: profileIcon,
    label: 'Meu Perfil',
    href: '/perfil',
  },
];
