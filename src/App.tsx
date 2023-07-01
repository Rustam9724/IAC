import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";

import { ContextProvider } from './context';

function App() {
  return (
    <div className="wrapper">
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;