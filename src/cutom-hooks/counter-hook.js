import { useState } from "react"

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increament = () => {
        setCount( count + 1 );
    }

    const decreament = () => {
        if ( count > 0 ) {
            setCount( count - 1 );
        }
        else {
            alert('Less than 0 is not allowed');
        }
    }

    const reset = () => {
        setCount(initialValue);
    }

    return { count, increament, decreament, reset};

};

export default useCounter ;