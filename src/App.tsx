import { Header } from "./components/Header";
import Main from "./components/Main";

import { ContextProvider } from './context';

function App() {
  return (
    <div className="wrapper">
      <ContextProvider>
        <Header />
        <Main />
      </ContextProvider>
    </div>
  );
}

export default App;