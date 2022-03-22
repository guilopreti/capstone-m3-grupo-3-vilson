import Routes from "./Routes";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProfile from "./components/Modals/ModalProfile";
import { useContext } from "react";
import { ModalContext } from "./Providers/differentStates/index";

function App() {
  const { showModal } = useContext(ModalContext);
  console.log(showModal);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles />
      <Routes />
      {showModal && <ModalProfile />}
    </>
  );
}

export default App;
