import eyeIcon from '../../assets/images/eye.svg';
import trashIcon from '../../assets/images/trash.svg';

import { Table } from '../../components/Table';

import { Container } from './styles';

export function OrdersHistory() {
  return (
    <Container>
      <Table
        title='Pedidos'
        quantity={1}
        columns={['Mesa', 'Data', 'Nome', 'Categoria', 'Total']}
      >
        <tbody>
          {[].map((order) => (
            <tr key={order._id}>
              <td>{order.icon}</td>
              <td>{order.name}</td>
              <td>
                <button type="button">
                  <img src={eyeIcon} alt="Botão de Editar" />
                </button>
                <button type="button">
                  <img src={trashIcon} alt="Botão de Excluir" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
