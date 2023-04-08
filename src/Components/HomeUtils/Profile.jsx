import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { login } from '../../App';
import { useNavigate } from 'react-router';

function Profile() {
  
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const { setLoggedIn, setUser } = useContext(login);
  const handleLogout = () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    let data = { ...info, loginUser: false }
    localStorage.setItem("userInfo", JSON.stringify(data));
    setLoggedIn(false);
    setUser(true);
  }
  useEffect(() => {
    let userProfile = JSON.parse(localStorage.getItem("userProfile"));
    console.log(userProfile.image);
    setProfile(userProfile);
   
  },[])
  return (
    <Container>
      <div className="profile-rectangle">
        <div className="profile-info">
          <img  src={(profile !== null && profile.image !== null) ? `${profile.image}` : 'https://tse1.mm.bing.net/th?id=OIP.5AVIoRYOTm3XEwgA-R0PFAHaHa&pid=Api&P=0'} alt="photo" className="photo" />
          <p className="name">{profile !== null ? `${profile.profileName}` : "User"}</p>
          <p className="userId">{profile !== null ? `${profile.profileUser}` : "User@123"}</p>
          <div>
            <button onClick={() => { navigate('/') }}>Edit Profile</button>
            <button onClick={() => { handleLogout() }}>Log Out</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Profile;

const Container = styled.div`
.profile-rectangle{
padding-bottom: 1rem;
padding-top: 1rem;
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
    object-fit: fill;
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
  cursor: pointer;
    background: #F4C27F;
    border-radius: 50px;
    font-size: 12px;
    padding: 5px;
    margin: 5px;
  }
}
}

`;
