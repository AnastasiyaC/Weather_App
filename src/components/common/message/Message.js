import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./message.module.scss";

function Message(props) {
    const [message, setMessage] = useState('');

    useEffect( () => {
       setMessage(props.message)
    }, [props.message]);

    return (
        <>
            { message &&
                <span className={ classes.message }>
                    { message }
                </span>
            }
        </>
    )
}

export default Message;