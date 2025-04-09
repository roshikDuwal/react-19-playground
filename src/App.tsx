import { useEffect, useState } from "react";
import Router from "./routes/Router";
import Registration from "./views/form/Registration";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  //Learn
  //Naming Convention-PascalCase for Component
  //React ?->Hot Reload
  //JSX-Javascript XML
  //Component-> function
  //Fragment
  //Dynamic Value in Jsx: {value}
  //Conditional rendering: ternary operation
  //import and export :default,named,mixed
  //looping:map
  //props: passing parameters in component
  //Destructuring:desctructuring the props
  //Css-inline css,module css
  //Tailwindcss-Utility class Css
  //Event Handling-> event handle like mouse click
  // -always start from prefix 'on' and function must be start with prefix handle in camelCase
  //Event Propagation-Capturing Phase,Target Value,Bubbling Phase

  //Hooks
  // -state work:
  // Reconcilition:process where React updates the Browser DOM if there is any changes in ReactDOM using diff algorithm.
  //Diff Alogrithm:used to differentiate the DOM Tree to make new changes.

  // -when state is  changed  then it re-render that component and its all Children.
  // -why state value doesnot reset on re-render -> state value take the initial value for the first time then it takes the state current value.

  //Lift State up-React
  // pattern to move child component(props) into common parent component so that multiple child component can be share and syncronized

  //Controlled vs UnControlled Form Handling

  //Form

  //Hooks

  return (
    <div className="h-[100vh] relative box">
      {/* <NetflixSeries/>  */}
      {/* <EventHandling/> */}
      {/* <EventPropagation/> */}

      {/* REACT HOOKS  */}
      {/* Hooks  */}
      {/* <UseState/> */}
      {/* <LiftStateUp/> */}
      {/* <Todo/> */}
      {/* <Registration/> */}
      {/* <UseRef /> */}
      {/* <BioProviderUsingUse>
            <BioProvider>
              <ContextPage />
            </BioProvider>
          </BioProviderUsingUse> */}
      {/* <Reducer/> */}

      {/* Difference between React.memo and useMemo
          React.memo - Compenent re-render nai garna nadinye only if the props ma change hune data  are not passed
          useMemo - Component re-render hunxa tara  Function ko dependency change chaina vane re-render garna nadinye
          useCallback - Function ko reference change hune chaina vane re-render garna nadinye
          <ReactMemo/> 
          <UseMemo/> 
          <Difference/> 
          <UseCallback/>*/}

      {/* REACT ROUTER DOM  */}
      <Router />

      <button className="btn absolute bottom-8 right-8" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default App;
