import React, {FormEvent, useEffect, useState} from "react";
import Layout from "../Layout/layout";


async function getUrl(): Promise<string> {
    return window.location.href;
}
export function getUuid(): string {
    const [uuid, setUuid] = useState("");
    useEffect(() => {
        getUrl()
            .then(url => setUuid(url));
    }, [1]);
    return uuid;
}

export function CheckUuid() {
    const [uuid, setUuid] = useState("");
    //ToDo: add DB check
    function handleClick(event: FormEvent) {
        event.preventDefault();
        setUuid(getUuid());
        if(!uuid) {
            return <Layout children={"Sorry, Access Denied"}/>
        } else {
            return <Layout children={"Approved"}/>
        }
    }

    return (
        <div className="checkUuid">
            <form onSubmit={handleClick} className="form">
                <input className="checkUuidButton" type="submit" name="Start"/>
            </form>
        </div>
    );
}
