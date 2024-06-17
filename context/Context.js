import {createContext} from "react";
import run from "@/Config/mediassist";
export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        await run()
    }
    onSent("What is Next.js?")
    const contextValue = {

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;