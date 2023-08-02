import { Hightlight } from '@components/Hightlight';
import { Container, Content, Icon} from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup(){
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />

        <Hightlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input />

        <Button 
          style={{ marginTop: 20 }}
          title="Criar"
        />
      </Content>
    </Container>
  )
}