import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../../assets/favicon.jpeg'
const Container = styled.div`
  background-color: #0d115b;
  width: 100%;
  min-height: 30px;
  padding-right: 5px;
  top: 0;
  right: 0;
  left: 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  @media only screen and (max-width: 600px) {
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-bottom:10px;
    padding-top:10px;
  }
`;

// const PictureContainer = styled.div`
// height:30px;
// width:30px;
// border-radius:15px;
// border-width:2px;
// border-color:#3b4993;
// margin:5px
// `

const ProfileImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border-color: #ffffff;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    height: 160px;
  width: 160px;
  border-radius: 80px;
  align-self:center;
  margin-right:auto;
  margin-left:auto

  } 
`;

const H1 = styled.h1`
font-size:30px;
color:white;
font-style:italic;

  @media only screen and (max-width: 600px) {
  }
`
export default () => (<Container>
    <ProfileImage src={ProfilePic}/>
    <H1>Talha Ashraf</H1>
</Container>);
