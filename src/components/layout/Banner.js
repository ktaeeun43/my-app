import React from 'react'
import styled from "styled-components";

export const BannerWrapper = styled.div`
top: 80px;
left: 0px;
width: 1920px;
height: 450px;
background-color: #1A69ED;
`;

function Banner() {
  return (
    <>
    <BannerWrapper/>
    </>
  )
}

export default Banner