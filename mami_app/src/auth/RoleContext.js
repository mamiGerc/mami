import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState(null);

  const signIn = (newRole) => setRole(newRole);
  const signOut = () => setRole(null);

  return (
    <RoleContext.Provider value={{ role, signIn, signOut }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
