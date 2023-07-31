import { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Hightlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />     
    </Container>
  );
}
