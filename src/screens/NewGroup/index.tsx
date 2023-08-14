import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Hightlight } from '@components/Hightlight';
import { Container, Content, Icon} from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';


export function NewGroup(){
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players',{ group });
  }

  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />

        <Hightlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          style={{ marginTop: 20 }}
          title="Criar"
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}