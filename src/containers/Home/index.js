import React, { useState, useRef } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import H1 from '../../components/Title'
import ContainerI from '../../components/ContainerItens'
import Buttons from '../../components/Button'


import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./style";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

function Home() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const history = useHistory();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      id: Math.random(),
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    history.push("/usuarios")
  }

  


  return (
    <Container>
      <Image alt="logo" src={People}></Image>
      <ContainerI>
        <H1>Olá!</H1>
        
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Vinicius"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="23"></Input>

        <Buttons onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Buttons>

      
      </ContainerI>
    </Container>
  );
}

export default Home;
