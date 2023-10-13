import { useState } from "react";


const UseState = () => {

    const [color, setColor] = useState("red");

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");


    return (
        <>
            <div>
                <h1>My favorite color is {color}!</h1>
                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>
            </div>
            <div>
                <h1>My {brand}</h1>
                <p>
                    It is a {color} {model} from {year}.
                </p>

                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            </div>
        </>

    );
};

export default UseState;
