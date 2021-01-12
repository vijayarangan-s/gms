import React, {useState} from 'react'

export default function AddBill() {
    const [text, setText] = useState('')
    const handleClick = (e) => {
        console.log("eadsf.")
        setText(e.target.value)
    }

    return (
        <div>
            <div className="d-flex justify-content-center col-sm-7">
                <input type="text" className="form-control" value={text} onClick={handleClick} />
            </div>
        </div>
    )
}
