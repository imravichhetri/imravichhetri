import React from 'react'
import MainPage from "./MainPage"
import ContainerCard from "./ContainerCard";

const Layout = props => {
  return (
    <MainPage>
    <ContainerCard>
      {props.children}
    </ContainerCard>
  </MainPage>
  )
}

export default Layout
