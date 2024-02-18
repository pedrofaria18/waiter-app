import homeIcon from '../../assets/images/home.svg';
import orderIcon from '../../assets/images/order.svg';
import menuIcon from '../../assets/images/menu.svg';
import usersIcon from '../../assets/images/users.svg';


export const pagesHeaderInfo: Record<string, {
  icon: string,
  title: string,
  subtitle: string
}> = {
  home: {
    icon: homeIcon,
    title: 'Home',
    subtitle: 'Acompanhe os pedidos dos clientes',
  },

  'orders-history': {
    icon: orderIcon,
    title: 'Histórico',
    subtitle: 'Visualize pedidos anteriores',
  },

  menu: {
    icon: menuIcon,
    title: 'Cardápio',
    subtitle: 'Gerencie os produtos do seu estabelecimento',
  },

  users: {
    icon: usersIcon,
    title: 'Usuários',
    subtitle: 'Cadastre e gerencie seus usuários',
  },


  perfil: {
    icon: usersIcon,
    title: 'Perfil',
    subtitle: 'Gerencie seu perfil',
  },
};
