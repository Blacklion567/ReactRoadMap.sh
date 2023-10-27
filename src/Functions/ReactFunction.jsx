// # REACT FUNCTION COMPONENT EXAMPLE
const ReactFunction = () => {
  const greeting = 'Hellow Player Welcome to React Function';

  return (
    <>
      <h1>{greeting}</h1>
      <Headline />
    </>
  );
};

function Headline() {
  const greeting = 'Hellow I Welcome You Again Player';

  return <h1>{greeting}</h1>;
}

export default ReactFunction;
