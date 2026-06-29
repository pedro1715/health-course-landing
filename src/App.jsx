import React, { createContext, useContext, useState } from 'react';
import HomePage from './pages/index.jsx';
import LeadForm from './components/LeadForm.jsx';

export const AppContext = createContext({});
export const useApp = () => useContext(AppContext);

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <AppContext.Provider value={{ openForm: () => setIsFormOpen(true) }}>
      <HomePage />
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </AppContext.Provider>
  );
}
