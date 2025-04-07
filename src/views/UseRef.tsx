import { FormEvent, InputHTMLAttributes, Ref, useId, useRef } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id:string;
    type: string
    ref: Ref<HTMLInputElement>;
}


// const BeforeReact19Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//     const id = useId();
//     const { label, ...rest } = props;
//     return (
//         <div className="flex-center flex-col gap-2">
//             <label htmlFor={id}>{label}</label>
//             <input id={id} ref={ref} placeholder="Enter here" {...rest} />
//         </div>
//     )
// });


const AfterReact19Input = (props: InputProps) => {
    const uniqueid = useId();
    const { label,id, ...rest } = props;
    return (
        <div className="flex-center flex-col gap-2">
            <label htmlFor={uniqueid + id}>{label}</label>
            <input id={uniqueid + id}  placeholder="Enter here" {...rest} />
        </div>
    )
};

const UseRef = () => {
    //Uncontrolled component with useRef
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username.current) {
            console.log(username.current.value);
        }

        if (password.current) {
            console.log(password.current.value);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* <BeforeReact19Input ref={username} label="Username" type="text" />
            <BeforeReact19Input ref={password} label="Password" type="password" /> */}

            <AfterReact19Input  label="Username" id="username" ref={username} type="text" />
            <AfterReact19Input  label="Password" id="password" ref={password} type="password" />

            <button type="submit">Submit</button>
        </form>
    )
}

export default UseRef
