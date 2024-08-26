import { useState } from "react";

function TestingPage() {
    const [data, setData] = useState({
        token: '',
        name: '',
    })

    const changeData = (key, value) => {
        setData(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const onClickButton = () => {
        changeData('name', "FIKRI")
        changeData('token', "jkhasldkfhlsajkdbfjasbdfjkashbfjasbf")
    }

    console.log(data);

    return (
        <div>
            Testing Page
            <button onClick={onClickButton}>Change Data</button>
        </div>
    )
}

export default TestingPage;