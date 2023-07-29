import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';

import { Container } from './styles';

export default function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
    </Container>
  );
}
