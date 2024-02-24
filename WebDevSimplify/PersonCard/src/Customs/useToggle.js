import { useState } from "react";

export function useToggle (initialValue) {
    const [value, setValue] = useState()

    function toggle() {
        setValue(currValue => !currValue)
    }

    return [value, toggle]
}