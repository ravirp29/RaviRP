import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<App />, document.getElementById('app'));











// ReactDOM.render(<App/>,document.getElementById('app'));
// import Home from './component/home/home';
// import Contact from './component/contact/contact';
// import About from './component/about/about';


// ReactDOM.render((
//   <BrowserRouter>
//    <Home />
//     <App />

//     <Route path="home" component={Home} />
//     {<IndexRoute component={Home} />}
//     {<Route path="/home" component={Home} />}
//   </BrowserRouter>
// ), document.getElementById('app'));



//                       var Router = require("react-router").Router;
//                       var Route = require("react-router").Route;
//                       var Switch = require("react-router").Switch;












// ReactDOM.render((
//   <Router history={hashHistory}>
//       <Switch>
//         <Route path = "/" component = {App} />
//         <Route path = "home" component = {Home} />
//           {/* <IndexRoute component = {Home} /> */}
//           {/* <Route path = "/home" component = {Home} />
//           <Route path = "/about" component = {About} />
//           <Route path = "/contact" component = {Contact} /> */}
//       </Switch>
//     </Router>
//  ), document.getElementById('app'));