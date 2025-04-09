import { createContext, use } from "react";

type BioContextType={
    name:string,
    age:number
}

 export const BioContext=createContext<BioContextType>({
    name:"",
    age:0
});

type BioProviderProps={
    children: React.ReactNode;
}

 export const BioProviderUsingUse=({children}:BioProviderProps)=>{
        const name="Neha Niroula";
        const age=22;

    return(
        <BioContext.Provider value={{name,age}}>
            {children}
        </BioContext.Provider>
    )
}

//custom Hooks
export const useBioContextUsingUse=()=>{
    const context=use(BioContext);
    if(context===undefined) throw new Error("Component must be used within a BioProvider");
    return context;
}

