import { Name } from "./Person.types";

type ListProps = {
  list: Name[];
};

const PersonList = (props: ListProps) => {
  return (
    <div>
      {props.list.map((person) => {
        return (
          <h2 key={person.first}>
            {person.first} {person.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
