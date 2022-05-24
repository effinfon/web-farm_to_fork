import { React } from "react"

import { Endpoints } from "../configuration"

/// ----

export function Mock_UploadForm () {
    const onClick_buttonGET = (e) => {
        console.log(`clicked ${e.target}`);
        fetch("http://localhost:3001/forms")
            .then( (response) => {
                return response.json();
            } )
            .then( (json) => {
                console.log(json);
            } );
    };
    const onClick_buttonPOST = (e) => {
        const dummy_JSON = {"name" : "my name is", "title" : "my title is", "number": 1, "boolean": false, "base64": "data:image/png;base64:ASKGDHGAS="}

        console.log(`clicked ${e.target}`);
        fetch("http://localhost:3001/forms", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(dummy_JSON)
        });
    };

    return (
        <>
            <textarea placeholder="Type in here"></textarea>
            <button onClick={onClick_buttonGET}>GET</button>
            <button onClick={onClick_buttonPOST}>POST</button>
        </>
    );
}