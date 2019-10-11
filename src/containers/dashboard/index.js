import React ,{Component} from 'react';
import {Header} from '../../components'
import styled from 'styled-components'
// import BG from '../../assets/iosbg.jpg'
const Container = styled.div`
background-image: url("https://9to5mac.com/wp-content/uploads/sites/6/2019/04/ios13-report1-featured.jpg?quality=82&strip=all&w=1600");
height:70vh;
width:100hw
`
export default () =>(
    <Container>
    <Header/>
    </Container>
)