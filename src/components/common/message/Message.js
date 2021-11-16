import React, {useEffect} from "react";
import {useState} from "react";

function Message(props) {
    const [message, setMessage] = useState('');

    useEffect( () => {
       setMessage(props.message)
    }, [props.message])

    return (
        <>
            { message && <div><span>{message}</span></div> }
        </>
    )
}

export default Message;