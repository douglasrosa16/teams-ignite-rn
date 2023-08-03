import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <Filter 
        title="Time A"
        isActive
      />
    </Container>
  )
}