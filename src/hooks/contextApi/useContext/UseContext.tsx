import { createContext, useContext } from "react";

type BioContextType={
    myName:string,
    myAge:number
}

 export const BioContextUsingUse=createContext<BioContextType>({
    myName:"",
    myAge:0
});

type BioProviderProps={
    children: React.ReactNode;
}

 export const BioProvider=({children}:BioProviderProps)=>{
        const myName="Roshik Duwal";
        const myAge=22;
    return(
        <BioContextUsingUse.Provider value={{myName,myAge}}>
            {children}
        </BioContextUsingUse.Provider>
    )
}

//custom Hooks
export const useBioContext=()=>{
    const context=useContext(BioContextUsingUse);
    if(context===undefined) throw new Error("Component must be used within a BioProvider");
    return context;
}

