import "./home.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export default function Home() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("hello")
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main>
      <div onClick={openModal} className="folder createFolder">
        <i className="fa-solid fa-plus"></i>
        <h2>Create folder</h2>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalContent">
            <div className="modalHead">
                <h2 className="modalTitle">Folder infos</h2>
                <i class="fa-solid fa-xmark" onClick={closeModal}></i>
            </div>
            <form className="modalForm">
                <div className="formItemContainer">
                    <label className="formLabel" for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="formItemContainer">
                    <label className="formLabel" for="description">Description:</label>
                    <textarea id="description" name="description" rows="4" cols="50" required />
                </div>
                <button className="formSubmitBtn">CONFIRM</button>
            </form>
        </div>
      </Modal>
      {/* <div className="folder"></div>
            <div className="folder"></div> */}
    </main>
  );
}
