import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useRole } from '../auth/RoleContext';

export default function ClubBudgets() {
  const { role } = useRole();
  const [budgets, setBudgets] = useState([]);
  const [value, setValue] = useState('');

  const addBudget = () => {
    if (!value) return;
    setBudgets([...budgets, { id: Date.now().toString(), value }]);
    setValue('');
  };

  return (
    <View>
      <FlatList
        data={budgets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
      {role === 'accountant' && (
        <>
          <TextInput placeholder="New budget" value={value} onChangeText={setValue} />
          <Button title="Add" onPress={addBudget} />
        </>
      )}
    </View>
  );
}
