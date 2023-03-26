import React from 'react';
import styled from 'styled-components';


function Profile({logDetail}) {
  const logOut=()=>{
    logDetail(true);
  }
  return (
    <Container>
      <div className="profile-rectangle">
          <div className="profile-info">
            <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="photo" className="photo" />
            <p className="name">My Name</p>
            <p className="userId">@myname123</p>
            <button onClick={logOut}>Log Out</button>
          </div>
      </div>
    </Container>
  )
}

export default Profile;

const Container = styled.div`

.profile-rectangle{


padding-bottom: 1rem;
padding-top: 2rem;

display: flex;
align-items: center;
justify-content: center;
background: rgba(244, 194, 127, 0.67);

.profile-info{
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.photo{
    object-fit: cover;
    position: relative;
    width: 5.25rem;
    height: 5.25rem;
    padding: 4px;
    border-radius: 50% ;
    border: 3px solid #D8605B;
  
}
.name{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 115.69%;
letter-spacing: 0.05em;
color: #000000;
margin: 2px;
}
.userId{
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 115.69%;
letter-spacing: 0.05em;
color: #D8605B;
margin-bottom: 18px;

}
button{
    background: #F4C27F;
    border-radius: 50px;
    font-size: 12px;
    padding: 5px;
   
}
}
}

`;
