import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Card from "./components/Card.jsx";
import logo from "./images/logo_multisearch.png"



function App() {
  const [mainData, setMainData] = useState({});
  const [itemQuantity, setItemQuantity] = useState(0);
  const [query, setQuery] = useState("");

  //Init State
  useEffect(() => {
    getValuesFromApi();
  }, []);

  useEffect(() => {
    getValuesFromApi(query);
  }, [query]);

  const getValuesFromApi = async (query) => {
    try {
      let response = await fetch(
        "https://localhost:7217/api/MultiSearch" + "/" + query
      );

      let data = await response.json();
      let quantity = Object.values(data).reduce(
        (acc, current) => acc + current.length,
        0
      );
      setItemQuantity(quantity);
      setMainData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App w-100 d-flex flex-column align-items-center mb-5">
		<img src={logo} alt="Logo"/>
      <SearchBar query={query} setQuery={setQuery} />
      <span>Foram encontrados {itemQuantity} resultados</span>
      <>
        {!!mainData &&
          Object.entries(mainData).map((eachType) => (
            <Card key={eachType[0]} cardName={eachType[0]} list={eachType[1]} />
          ))}
      </>
    </div>
  );
}

export default App;
