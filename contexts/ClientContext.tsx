import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Client {
  id: string;
  name: string;
  lastName: string;
  cedula?: string;
  status: 'al_dia' | 'debe';
  balance: number;
}

interface ClientContextType {
  clients: Client[];
  addClient: (client: Omit<Client, 'id' | 'status' | 'balance'>) => void;
  getClient: (id: string) => Client | undefined;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const useClients = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClients must be used within a ClientProvider');
  }
  return context;
};

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<Client[]>([
    { id: '1', name: 'Juan', lastName: 'Pérez', status: 'al_dia', balance: 0 },
    { id: '2', name: 'María', lastName: 'García', status: 'debe', balance: 45000 },
  ]);

  const addClient = (clientData: Omit<Client, 'id' | 'status' | 'balance'>) => {
    const newClient: Client = {
      ...clientData,
      id: Date.now().toString(),
      status: 'al_dia',
      balance: 0,
    };
    setClients(prev => [...prev, newClient]);
  };

  const getClient = (id: string) => {
    return clients.find(client => client.id === id);
  };

  return (
    <ClientContext.Provider value={{ clients, addClient, getClient }}>
      {children}
    </ClientContext.Provider>
  );
};