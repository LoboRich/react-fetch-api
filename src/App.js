import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import './App.css';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => {
      setUsers(result)
      setLoading(false)
    })
    .catch(error => {
      setErrors(error)
      setLoading(true)
    })
  }
  
  useEffect(() => {
    fetchUsers();
  });

  return <div>
    <h1>Random User</h1>
    {hasError ? <p>{hasError.message}</p> : null}
    {!isLoading ? (
        users.map(user => {
          const {id, name, email} = user;
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
            </div>
          );
        })
    ): (
      <p>{isLoading}</p>
    )}
  </div>
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Form/>
        <Users />
      </header>
    </div>
  );
}

export default App;
