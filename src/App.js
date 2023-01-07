import {Fragment} from "react";
import LandingPageContainer from "./Containers/LandingPageContainer";
import Header from "./Components/Header";
import "antd/dist/reset.css";
import FooterComponent from "./Components/FooterComponent";
import {ToastProvider} from "react-toast-notifications";

function App() {
  return (
    <Fragment>
        <ToastProvider autoDismiss={true} autoDismissTimeout={4000} PlacementType="bottom-right">
        <Header />
      <LandingPageContainer />
        <FooterComponent />
        </ToastProvider>

    </Fragment>
  );
}

export default App;
