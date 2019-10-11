import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../../assets/favicon.jpeg'
const Container = styled.div`
  background-color: #3b4993;
  width: 100%;
  min-height: 30px;
  padding-right: 5px;
  top: 0;
  right: 0;
  left: 0;
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
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border-width: 2px;
  border-color: white;
  margin: 5px;
`;

export default () => (<Container>
    <ProfileImage src={ProfilePic}/>
</Container>);
