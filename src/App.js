import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Home from "./head/home.js"
import HomePage from "./home";
import { GlobalStyle } from "./globalStyle.js";
import store from "./store";
import Header from './head';
import QuestionManagement from "./management";
import QuestionAnalysis from "./analysis";
import "./statics/icons/iconfont.css";
import Description from './management/desc'
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/create/homepage" component={HomePage} />
          <Route path="/management" exact component={QuestionManagement} />
          <Route path="/analysis" component={QuestionAnalysis} />
          <Route path="/management/description" component={Description} />
        </HashRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
