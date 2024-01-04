# set up for typescript

- npx create-react-app react-typescript --template typescript

# types or interfaces?

- use types when building interfaces and use interfaces when building libraries.

# Passing Props as string:

- Greet component

# Passing Props as object:

- Person component

# Passing Props as array of objects:

- PersonList component

# Passing Props as condition:

- Status component

# Passing Props as children prop:

- Heading component

# Passing React component as a children prop:

- Oscar component

# Typing a click event as a component prop

- Button component

# Typing an onchange event in an input element

- Input component

# type styles as prop

- Container component

# Prop types and tips:

1.  You can destructure props also.

- Input component

2. Exporting types: In all our files, we have defined type at top, this works for simple components, However for large components with multiple types, try to move that type into a seperate file and import them when necessary.

- Person component

Make a file named Person.types.ts
export type PersonProps = {
name: {
first: string;
last: string;
};
};

now import this file into Person component

3. Reusing types:

- Person component && PersonList component

# Usestate:

- Typescript is smart enough to infer what the state variable type is based on the initial value we pass in. When we passed in false as initial value, typescript inferred that isLoggedIn is always of type boolean which in turn infers that only boolean values can be passed in as an argument to the setter function.

- LoggedIn component inside state folder

# Usestate: when initial value is not initially known and will be known in future point of time

- type AuthUser = {
  name: string;
  email: string;
  };

- const [user, setUser] = useState<AuthUser | null>(null);

  // We are informing typescript that type of user can be null or AuthUser.

  When we do specify null as one of the possible value, we always have to make a check in our code that user is not null before accessing the properties.

  <div>User name is {user?.name}</div>

  # Usestate: type asertion:

- We are telling typescript that null will also have the type as AuthUser.

const [user, setUser] = useState<AuthUser>({} as AuthUser);

# UseReducer hook:

- type for state && action
- Counter component inside state folder

# UseReducer hook: Discriminated Unions: Recommended approach for typing reducer function

- type CounterState = {
  count: number;
  };

type UpdateAction = {
type: "increment" | "decrement";
payload: number;
};

type ResetAction = {
type: "reset";
};

- Counter component

# UseContext hook

- Box component
- ThemeContext component
- theme.ts
- All are inside context folder
