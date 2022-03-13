import React, {useState, useRef, useEffect} from "react"; 
import axios from 'axios'
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from "./style";

import People from "../../assets/people.svg";
import Trash from "../../assets/trash.svg"
import Arrow from "../../assets/arrow.svg";




function App() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();




  async function addNewUser(){

    const {data:newUser} = await axios.post("http://localhost:3001/users", {id:Math.random(), name:inputName.current.value, age:inputAge.current.value})

   setUsers([...users, newUser]);

  }

  useEffect(() => {
    async function fetchUsers(){
      const { data :newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers);
    }
    fetchUsers()
  }, []);



  async function deleteUsers(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }



  return (
    <Container>
      <Image alt="logo" src={People}></Image>
      <ContainerItems>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Vinicius"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="23"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}></img></Button>

        <ul>
          {users.map((user) => (
              <User key={user.id}>
               <p>{user.name}</p> <p>{user.age}</p>
               <button onClick={() => deleteUsers(user.id)}>
                 <img src={Trash} alt="lata-de-lixo"></img>
                 </button>
              </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
