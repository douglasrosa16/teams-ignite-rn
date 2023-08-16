import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '@storage/group/groupCreate';

import { Hightlight } from '@components/Hightlight';
import { Container, Content, Icon} from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup(){
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew(){
    try {
      await groupCreate(group);

      navigation.navigate('players',{ group });  
    } catch (error) {
      console.log(error);
    }
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