import useToggle from "../../../useful-custom-react-hooks/src/1-useToggle/useToggle";


export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className="">
      <div className="">{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button
        onClick={() => toggleValue(true)}
      > Make True</button>
      <button
        onClick={() => toggleValue(false)}
      > Make False</button>
    </div>
  );
}
