import styled from "styled-components";
const Login=(props)=>{
return(
      <Container>
          <Content>
              <CTA>
                  
                <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
     <Signup>sashit pud bishal</Signup>
     <Description>this is my first high class website and i am building something great for myself. for making this i have spended so many time and hour to makes its happen`</Description>
     <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
            <BgImage />
        
          </Content>
      </Container>
);
    

};
const Container=styled.section`
overflow:hidden;
display:flex;
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;`;

const Content=styled.div`
margin-bottom:12px;
padding:30px;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;`;

const BgImage= styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position: absolute;
top:0;
right:0;
left:0;
z-index:-1;`;

const CTA= styled.div`
margin-buttom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-item:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
tranisition:opacity 0.2s;
width:100%;
`;
const CTALogoOne=styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;`;

const Signup=styled.a`
font-weight:bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom:12px;
width:100%
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border-radius:4px;

&:hover{
    background-color:#0483ee;
    
}
`;
const Description=styled.p`
color:hsla(0, 0%, 95.38%, 1);
font-size:12px;
margin:0 0 24px;
line-height:1.5;
letter-spacing :1.5px;

`;
const CTALogoTwo=styled.img`
margin-bottom:20px;
max-width:600px;
min-height:1px;
display:inline-block;
vertical-align:bottom;
width:100%;
`;





export default Login;
