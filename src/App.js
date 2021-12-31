import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import notFound from "./Pages/notFound";
import Post from "./Pages/Post";
import Footer from './Components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>  
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id/:ca" component={Post} />
        <Route component={notFound} />
      </Switch>
      <div className="Footer">
        <Footer/>
        </div>
    </BrowserRouter>
    
  );
};

export default App;
