import { createContext } from "react";
import { componentsObject } from "../utils/componentsObject";
import { useState } from "react";


const ComponentContext = createContext();

// eslint-disable-next-line react/prop-types
const ComponentProvider = ({ children }) => {
    const [components, setComponents] = useState(componentsObject);

    return (
        <ComponentContext.Provider value={{ components, setComponents }}>
            {children}
        </ComponentContext.Provider>
    );
}

export { ComponentContext, ComponentProvider };