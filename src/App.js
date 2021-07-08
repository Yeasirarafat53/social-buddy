import './App.css';
import Home from './component/Home/Home';
import Post from './component/Post/Post';
import PostDetail from './component/PostDetail/PostDetail';
import NoMatch from "./component/NoMatch/NoMatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>

      <Route path="/Home">
            <Home />
          </Route>

          <Route path="/post/:postId">
            <PostDetail/>
          </Route>



          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
