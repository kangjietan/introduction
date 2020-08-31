import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal header</h2>
        <p>Modal body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
