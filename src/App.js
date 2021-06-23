import React, {lazy, Suspense} from 'react';
import './App.css';
import {Page} from './routesDom/Page/index'
import Footer from './components/Footer/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Header = lazy(() => import('./components/Header/index'));
const Menu = lazy(() => import('./components/Header/Menu/index'));




function App() {
  return (
      <Suspense fallback={ <div>...loading</div> }>
          <Router>
            <Header />
            <Menu />
            <div className="ground-container">
              <div className="main-container">
                <Switch>
                  {Page.map((page ,i)=> (
                    <Route path={page.path} exact={page.exact} component={page.component} key={i} />
                  ))}
                </Switch>
                <Footer />
              </div>
            </div>
          </Router>
      </Suspense>
  );
}

export default App;
