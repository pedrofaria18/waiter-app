import { ReactNode } from 'react';

import { Container } from './styles';

interface TableProps {
  title: string;
  quantity: number;
  hasNewItemButton?: boolean;
  labelNewItemButton?: string;
  onCreateNewItem?: () => void;
  columns: string[];
  children: ReactNode;
}

export function Table({
  title,
  quantity,
  hasNewItemButton = false,
  labelNewItemButton,
  onCreateNewItem,
  columns,
  children,
}: TableProps) {
  return (
    <Container>
      <header>
        <div className="info">
          <strong>{title}</strong>
          <span>{quantity}</span>
        </div>

        {hasNewItemButton && (
          <button type="button" className="new-info" onClick={onCreateNewItem}>
            {labelNewItemButton}
          </button>
        )}
      </header>

      <table>
        <thead>
          <tr>
            {columns.map((thead) => (
              <th key={thead}>{thead}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        {children}
      </table>
    </Container>
  );
}
