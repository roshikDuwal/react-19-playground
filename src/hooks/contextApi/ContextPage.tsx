import { useBioContextUsingUse } from './use/Use';
import { useBioContext } from './useContext/UseContext';

const ContextPage = () => {
 const { myName } = useBioContext();

    let hook = true;
    let name;

    if (hook) {
        ({ name } = useBioContextUsingUse())
    }

    return (
        <>
            <div>
                Your name is {myName}
            </div>
            <div>
                Your name is {name}
            </div>
        </>

    )
}

export default ContextPage
