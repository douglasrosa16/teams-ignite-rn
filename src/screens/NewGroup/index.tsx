import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppError } from '@utils/AppError';

import { groupCreate } from '@storage/group/groupCreate';

import { Hightlight } from '@components/Hightlight';
import { Container, Content, Icon } from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da  turma');
      }

      await groupCreate(group);

      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

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