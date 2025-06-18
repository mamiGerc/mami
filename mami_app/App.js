import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UniversityExpenses from './src/modules/UniversityExpenses';
import ClubBudgets from './src/modules/ClubBudgets';
import ProjectAllowances from './src/modules/ProjectAllowances';
import StaffSalaries from './src/modules/StaffSalaries';
import { RoleProvider, useRole } from './src/auth/RoleContext';
import { Button, View, Text } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const { role, signIn, signOut } = useRole();
  return (
    <View>
      <Text>Role: {role || 'guest'}</Text>
      {role ? (
        <Button title="Sign Out" onPress={signOut} />
      ) : (
        <Button title="Sign In as Accountant" onPress={() => signIn('accountant')} />
      )}
      <Button title="University Expenses" onPress={() => navigation.navigate('UniversityExpenses')} />
      <Button title="Club Budgets" onPress={() => navigation.navigate('ClubBudgets')} />
      <Button title="Project Allowances" onPress={() => navigation.navigate('ProjectAllowances')} />
      <Button title="Staff Salaries" onPress={() => navigation.navigate('StaffSalaries')} />
    </View>
  );
}

export default function App() {
  return (
    <RoleProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UniversityExpenses" component={UniversityExpenses} />
          <Stack.Screen name="ClubBudgets" component={ClubBudgets} />
          <Stack.Screen name="ProjectAllowances" component={ProjectAllowances} />
          <Stack.Screen name="StaffSalaries" component={StaffSalaries} />
        </Stack.Navigator>
      </NavigationContainer>
    </RoleProvider>
  );
}
