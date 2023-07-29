import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export default function Groups() {
  return (
    <Container>
      <Header />
      <Hightlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <GroupCard title="Galera do ignite" />
    </Container>
  );
}
