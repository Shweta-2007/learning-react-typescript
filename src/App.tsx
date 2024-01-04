import "./App.css";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import User2 from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  const listOfNames = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  const optionStatus = "success";

  const Style = {
    border: "1px solid black",
    padding: "1rem",
    margin: "2rem",
    backgroundColor: "#b2c3ee",
  };

  return (
    <div className="App">
      <Greet name="Shweta" messageCount={5} isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList list={listOfNames} />
      <Status status={optionStatus} />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={Style} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User2 />
      </UserContextProvider>
    </div>
  );
}

export default App;
