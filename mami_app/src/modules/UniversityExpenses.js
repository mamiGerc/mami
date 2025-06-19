import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useRole } from '../auth/RoleContext';

export default function UniversityExpenses() {
  const { role } = useRole();
  const [expenses, setExpenses] = useState([]);
  const [value, setValue] = useState('');

  const addExpense = () => {
    if (!value) return;
    setExpenses([...expenses, { id: Date.now().toString(), value }]);
    setValue('');
  };

  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
      {role === 'accountant' && (
        <>
          <TextInput placeholder="New expense" value={value} onChangeText={setValue} />
          <Button title="Add" onPress={addExpense} />
        </>
      )}
    </View>
  );
}
