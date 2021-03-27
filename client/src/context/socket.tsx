import { createContext, FC, useEffect, useState } from 'react';
import io from 'socket.io-client';

interface SocketProps {
  socket: any;
}

const SocketContext = createContext<SocketProps | null>(null);

const SocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  useEffect(() => {
    if (process.env.REACT_APP_SOCKET_URL) {
      // establish socket connection
      setSocket(io(process.env.REACT_APP_SOCKET_URL));
    }
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
