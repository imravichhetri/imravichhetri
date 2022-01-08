import * as React from "react"
import ContainerCard from "../components/ContainerCard";
import MainPage from "../components/MainPage"
import '../styles/style.css';

import { Router } from "@reach/router"

const SomeSubPage = props => {
  return <div>Hi from SubPage with id: {props.id}</div>
}

const App = () => (
  <MainPage>
    <ContainerCard>
      <Router>
        // ...dynamic routes here
        <SomeSubPage path="" />
      </Router>
      Ella
    </ContainerCard>
  </MainPage>
)

export default App

// markup
const IndexPage = () => {
  return (
    <MainPage>
      <ContainerCard>
        <div>

        </div>
      </ContainerCard>
    </MainPage>
  )
}

// export default IndexPage
