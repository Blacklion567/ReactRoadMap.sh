import { useMemo, useState } from "react";

const useMap = initialValue => {
  const [map, setMap] = useState(new Map(initialValue));

  const actions = useMemo(
    () => ({
      set: (key, value) =>
        setMap(prevMap => {
          const nextMap = new Map(prevMap);
          nextMap.set(key, value);
          return nextMap;
        }),
      remove: (key, value) =>
        setMap(prevMap => {
          const nextMap = new Map(prevMap);
          nextMap.delete(key, value);
          return nextMap;
        }),
      clear: () => setMap(new Map()),
    }),
    [setMap]
  );

  return [map, actions];
};

const UseMapHook = () => {
  const [map, { set, remove, clear }] = useMap([['apples', 10]]);

  return (
    <div>
      <button onClick={() => set(Date.now(), new Date().toJSON())}>Add</button>
      <button onClick={() => clear()}>Reset</button>
      <button onClick={() => remove('apples')} disabled={!map.has('apples')}>
        Remove apples
      </button>
      <pre>
        {JSON.stringify(
          [...map.entries()].reduce(
            (acc, [key, value]) => ({ ...acc, [key]: value }),
            {}
          ),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default UseMapHook;
