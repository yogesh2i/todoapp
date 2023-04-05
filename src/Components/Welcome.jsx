import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { login } from '../App';



export default function Welcome() {
  const [image, setImage] = useState(null)
  let navigate = useNavigate();
  let { LoggedIn } = useContext(login);
  useEffect(() => {
    if (!LoggedIn) {
      navigate('/login');
    }
  }, [LoggedIn])


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let url = (URL.createObjectURL(event.target.files[0]));
      setImage(url);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let info = (Object.fromEntries(new FormData(e.target)));
    localStorage.setItem("userProfile", JSON.stringify({ ...info, image }));
    navigate('/home');

  }

  return (
    <Container>
      <div className="box">
        <p>Fill Your Details Please</p>
        <hr />
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <label htmlFor="getimg"><img alt="preview image" src={image !== null ? image : "https://cdn4.iconfinder.com/data/icons/gray-user-management/512/photo-512.png"} className="imgprev" />
            <input type="file" onChange={onImageChange} id='getimg' style={{ display: "none" }} />
          </label>
          <label htmlFor="name">
            <input type="text" id='name' name='profileName' placeholder='Enter your Name' autoCapitalize='words' required minLength={3} />
          </label>
          <label htmlFor="username">
            <input type="text" id='username' name='profileUser' placeholder='Create UserName' required minLength={3} />
          </label>
          <div className="buttons">
            <button onClick={() => navigate("/home")}>Skip</button>
            <button type='submit'>Enter</button>

          </div>
        </form>

      </div>

    </Container>
  )
}

const Container = styled.div`
.box{
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.5);
  width: 40vw;
  margin: auto;
  margin-top: 15vh;
  text-align: center;
  border-radius: 10%;
  p{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.8rem;
  }
  form{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    .imgprev{
      border: 2px solid grey;
      width: 30%;
      aspect-ratio : 1;
      border-radius: 50%;
      cursor: pointer;
      object-fit: cover;
    }
   
    input{
      padding: 0.3rem;
      border-radius: 10px;
      margin-top: 1rem;
      outline: none;
      border: none;
      width: 80%;
    }
    .buttons{
      margin: 2rem 0 2rem 0;
      display: flex;
      justify-content: space-between;
      padding:0 2rem 0 2rem;
      button{
        cursor: pointer;
        padding: 0.3rem 0.5rem;
        border-radius: 20%;
        background-color: #e0e0f8c5;
      }
    }
  }
}

@media screen and (max-width:768px){
   .box{
    width: 80vw;
     p{
       font-size: 0.8rem;
     } 
   }
}
`;