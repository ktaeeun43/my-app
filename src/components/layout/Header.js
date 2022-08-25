import React from 'react';
import styled from "styled-components";

export const Wrapper = styled.nav`
width: 1920px;
height: 80px;
background-color: white;
display: flex;
flex-direction: row;
align-items: center;
color: white;
`;

export const MenuItem = styled.div`
padding-left: 650px;
width: 78px;
height: 25px;
text-align: center;
font: normal normal medium 20px/30px Spoqa Han Sans Neo;
letter-spacing: -0.4px;
color: #000000;
opacity: 1;
padding: 30px;
align-items: center;
`;

export const LogoWrapper = styled.div`
padding-left: 320px;
`;

export const Logo = styled.img`
top: 13px;
width: 181px;
height: 43px;
`;


function Header() {
  return (
    <>
    <Wrapper>
        <LogoWrapper>
            <Logo src="email_logo.png"/>
        </LogoWrapper>
      <MenuItem>
        거래소
      </MenuItem>
      <MenuItem>
        입출금
      </MenuItem>
      <MenuItem>
        투자내역
      </MenuItem>
      <MenuItem>
        공지사항
      </MenuItem>
    </Wrapper>
    </>
  )
}

export default Header