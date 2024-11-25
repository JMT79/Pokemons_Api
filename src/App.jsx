//Componentes
import { Button } from "./components/Button";
import { Card } from "./components/Card";
//Estilos
import "../src/styles/App.css";
//Iconos
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
//hooks
import { useState, useEffect } from "react";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  useEffect(() => {
    getPokemonName(pokemonId);
    getPokemonImg(pokemonId);
  }, [pokemonId]);
  async function getPokemonName(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemonName(data.species.name);
  }
  async function getPokemonImg(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemonImg(data.sprites.other.dream_world.front_default);
    console.log(data);
  }

  function prevClick() {
    if (pokemonId === 1) {
      setPokemonId(1);
    } else {
      setPokemonId(pokemonId - 1);
    }
  }

  function nextClick() {
    setPokemonId(pokemonId + 1);
  }

  return (
    <>
    <div className="title_container"><h1 className="title">POKEMON API</h1></div>
      <div className="main_container">
        <div className="card_container">
          <Card name={pokemonName} img={pokemonImg} />
        </div>
        <div className="buttons_container">
          <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />

          <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
        </div>
      </div>
    </>
  );
};
export { App };
