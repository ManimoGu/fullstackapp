import logo from './logo.svg';
import './App.css';
import { getUsers } from './Redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getUsers())

  }, [])

  const users = useSelector(state => state.Users.users)
  console.log(users)


  return (
    <div className="App">

      {
        users.map(item =>(
          <h1>{item.name}</h1>
        ))
      }
     
    </div>
  );
}

export default App;
