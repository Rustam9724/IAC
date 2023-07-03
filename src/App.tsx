import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { useContext } from "react";

import { SiteContext } from './context';
import ModalForm from "./components/ModalForm";

function App() {
  const {isModalForm, setIsModalForm } = useContext(SiteContext);

  function closeModal() {
    setIsModalForm(false);
    const body = document.querySelector('body');
    if (body) {
      body.style.height = 'unset';
      body.style.overflow = 'auto';
      body.style.marginRight = '0';
    }

  }

  return (
      <div className='wrapper'>
        <div className={`substrate ${isModalForm ? 'active' : null}`} onClick={closeModal}></div>
          <Header />
          <Main />
          <Footer />
          {
            isModalForm && <ModalForm />
          }
      </div>
  );
}

export default App;