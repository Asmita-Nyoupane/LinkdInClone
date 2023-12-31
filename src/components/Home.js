import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';

const Home=(props)=> {
  return (
    <>
   <Header/>
   <Container>
   <Layout>
    <Leftside/>
    <Main/>
    <Rightside/>
   </Layout>
   </Container>
    </>
  )
}
const Container=styled.div`
 padding-top:55px;
 max-width:100%;
 `;
const Layout=styled.div`
display:grid;
grid-template-areas:"leftside main rightside";
grid-template-columns:minmax(0 5fr),minmax(0,12fr),minmax(300px,7fr);
column-gap: 25px;
row-gap:25px;
/* grid-template-rows:auto; */
margin:25px 0;
@media (max-width:768px){
  display: flex;
  flex-direction:column;
  padding:0 5px;
  
}

`;
export default Home;
