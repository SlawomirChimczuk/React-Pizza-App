// import { useState } from 'react'
import { useState } from "react"
import Search from "./components/search/Search"
import FoodList from "./components/items/FoodList";
import Nav from "./components/nav/Nav";
import "./App.css"
import Container from "./components/container/Container";
import InnerContainer from "./components/container/InnerContainer";
import FoodDetails from "./components/items/FoodDetails";


function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState();
  const [query, setQuery] = useState('');

  const dataFiltered = foodData.filter(e => e.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <div>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} query={query} setQuery={setQuery}/>
        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} dataFiltered={dataFiltered}/>
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodId={foodId} />
          </InnerContainer>
        </Container>
      </div>
    </>
  )
}

export default App
