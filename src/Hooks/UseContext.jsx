import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UseContext = () => {
  const [user, setUser] = useState({
    student1: 'Blacklion567',
    student2: 'Chrisimos',
    student3: 'Aristides',
    student4: 'Proline',
  });


  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
};

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user.student1}`}</h2>
      <h2>{`Hello ${user.student2}`}</h2>
      <h2>{`Hello ${user.student3}`}</h2>
      <h2>{`Hello ${user.student4}`}</h2>
    </>
  );
}


export default UseContext;
