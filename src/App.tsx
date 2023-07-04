import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { useContext } from "react";

import { SiteContext } from './context';
import ModalForm from "./components/ModalForm";

function App() {
  const {isModalForm, setIsModalForm, setIsModalVideo, isModalVideo} = useContext(SiteContext);

  function closeModal() {
    const body = document.querySelector('body');
    const modalForm: HTMLDivElement | null = document.querySelector('.modal-form');
    const modalVideo: HTMLDivElement | null = document.querySelector('.modal-video');
    if (body && modalForm && modalVideo) {
      body.style.height = 'unset';
      body.style.overflow = 'auto';
      body.style.marginRight = '0';
      modalForm.style.top = '-100%';
      modalForm.style.transition = '1s ease';
      modalVideo.style.top = '-100%';
      modalVideo.style.transition = '1s ease';
      setIsModalForm(false);
      setIsModalVideo(false)
    }
  }

  return (
      <div className='wrapper'>
        <div className={`substrate ${isModalForm || isModalVideo ? 'active' : null}`} onClick={closeModal}></div>
          <Header />
          <Main />
          <Footer />
      </div>
  );
}

export default App;