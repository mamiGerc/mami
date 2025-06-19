import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useRole } from '../auth/RoleContext';

export default function ProjectAllowances() {
  const { role } = useRole();
  const [allowances, setAllowances] = useState([]);
  const [value, setValue] = useState('');

  const addAllowance = () => {
    if (!value) return;
    setAllowances([...allowances, { id: Date.now().toString(), value }]);
    setValue('');
  };

  return (
    <View>
      <FlatList
        data={allowances}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
      {role === 'accountant' && (
        <>
          <TextInput placeholder="New allowance" value={value} onChangeText={setValue} />
          <Button title="Add" onPress={addAllowance} />
        </>
      )}
    </View>
  );
}
