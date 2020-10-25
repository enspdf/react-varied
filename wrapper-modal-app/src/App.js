import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>Open Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>

      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </Modal>

      <Modal isOpen={isOpenChatModal} closeModal={closeChatModal} title="Chat">
        <p>
          Hola!! <b>- User1</b>
        </p>
        <p>
          Hola!! <b>- User2</b>
        </p>
      </Modal>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />
    </div>
  );
}

export default App;
