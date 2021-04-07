import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signin';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/entrar" component={Signin} />
            </Switch>
        </Router>
    );
}

export default App;
