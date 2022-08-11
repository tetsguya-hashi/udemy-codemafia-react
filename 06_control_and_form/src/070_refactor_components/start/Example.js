import { useState } from "react";
import AnimalFilter from "./components/AnimalFilter";
import AnimalList from "./components/AnimalList";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filtersAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })
  return (
    <>
      <AnimalFilter fiterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filtersAnimals} filterVal={filterVal} />
    </>
  );
};

export default Example;
