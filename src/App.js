
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div> users: {users.map((user => (<div>{user.name}</div>)))}</div>
    </div>
  );
}

export default App;
