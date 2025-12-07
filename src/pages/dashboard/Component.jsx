import { useState } from "react"
import CommonEditor from "../../components/CommonEditor"

const Component = () => {
    const [value, setValue] = useState("")
    const handleClick = () => {
        console.log({ value });
    }
    return (
        <>
            <CommonEditor value={value} setValue={setValue} />
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default Component