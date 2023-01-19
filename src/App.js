import {Fragment} from "react";
import Header from "./Components/Header";
import "antd/dist/reset.css";
import FooterComponent from "./Components/FooterComponent";


import {  Routes ,Route } from 'react-router-dom';
import LandingPageContainer from "./Containers/LandingPageContainer";
import ArticlePageScreen from "./Screens/ArticlePageScreen";
function App() {
  return (
      <Fragment>
          <Header />
          <Routes>
              <Route path='/' element={<LandingPageContainer/>} />
              <Route path='/article' element={<ArticlePageScreen/>} />
          </Routes>

          <FooterComponent />
      </Fragment>

  );
}

export default App;
