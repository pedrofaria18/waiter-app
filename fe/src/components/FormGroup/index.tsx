import { ReactNode } from 'react';

import { Container } from './styles';

interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: ReactNode
}
export function FormGroup({
  label,
  htmlFor,
  children
}: FormGroupProps) {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </Container>
  );
}
