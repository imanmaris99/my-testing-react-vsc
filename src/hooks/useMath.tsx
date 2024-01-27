
import { useState } from "react";


interface Props {
    a: number;
    b: number;
}

const useMath = ({a,b} : Props) => {

    const [result, setResult] = useState(0);

    const addition = () => {
        const result = a + b;
        setResult(result);
    }

    const substraction = () => {
        const result = a - b;
        setResult(result);
    }

    const multiplay = () => {
        const result = a * b;
        setResult(result);
    }

    return {

        result,
        addition,
        substraction,
        multiplay
    }
}

export default useMath;