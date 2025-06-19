import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useRole } from '../auth/RoleContext';

export default function StaffSalaries() {
  const { role } = useRole();
  const [salaries, setSalaries] = useState([]);
  const [value, setValue] = useState('');

  const addSalary = () => {
    if (!value) return;
    setSalaries([...salaries, { id: Date.now().toString(), value }]);
    setValue('');
  };

  return (
    <View>
      <FlatList
        data={salaries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
      {role === 'accountant' && (
        <>
          <TextInput placeholder="New salary" value={value} onChangeText={setValue} />
          <Button title="Add" onPress={addSalary} />
        </>
      )}
    </View>
  );
}
