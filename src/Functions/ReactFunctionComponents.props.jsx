// # REACT FUNCTION COMPONENT: PROPS
function ReactFunctionComponentsprops() {

  const greeting = 'REACT FUNCTION COMPONENT: PROPS';

  return <Headline value={greeting} />;
}

function Headline({ value }) {
  return <h1>{value}</h1>;
}

export default ReactFunctionComponentsprops;
