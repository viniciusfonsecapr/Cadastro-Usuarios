import React, {useState, useRef} from "react"; 

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


  function addNewUser(){
   setUsers([...users, {id:Math.random(), name:inputName.current.value, age:inputAge.current.value}]);

  }
  function deleteUsers(userId){
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
