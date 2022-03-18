import React, {useState, useEffect } from "react"; 
import {useHistory} from 'react-router-dom'

import H1 from '../../components/Title'
import ContainerI from '../../components/ContainerItens'
import Buttons from '../../components/Button'

import axios from 'axios';
import {
  Container,
  Image,
  User,
} from "./style";

import People from "../../assets/people2.svg";
import Trash from "../../assets/trash.svg"
import Arrow from "../../assets/arrow.svg"


function Users() {
  // const users = [];
  const [users, setUsers] = useState([]);

  const history = useHistory();

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

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo" src={People}></Image>
      <ContainerI isBlur={true}>
        <H1>Usuários</H1>
        
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
        <Buttons isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow}></img> Voltar 
        </Buttons>
      </ContainerI>
    </Container>
  );
}

export default Users;
