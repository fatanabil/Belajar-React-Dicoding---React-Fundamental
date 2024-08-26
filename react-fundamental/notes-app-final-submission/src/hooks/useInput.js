import { useState } from "react";

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const onChangeValue = (ev) => {
        setValue(ev.target.value);
    }

    return [value, onChangeValue]
}

export default useInput;