/// ----

// 3rd party
import { React, useState, useEffect } from "react"

// project
import { Languages, Translation } from "../internationalization/translation"
import { Endpoints } from "../configuration"

/// ----

export function Form () {
    // utilitary functions
    const toBase64 = (file, onload_callback) => {
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            onload_callback(e.target.result);
        };
    };
    const HTTPRequest_POST_Base64 = (endpoint, base64_data) => {
        fetch (
            endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify( {base64: base64_data} )
        })
        .then( (response) => { console.log("Server response:", response); })
        .catch( (e) => { console.log("HTMLRequest_POST_Base64", endpoint, e.message); } );
    }
    const HTTPRequest_POST_JSON = (endpoint, json_data) => {
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify( json_data ) // "JSON server will automatically add an id to this"
        })
            .then( (response) => { console.log("Response:", response) } )
            .catch( (e) => { console.log("HTMLRequest_POST_Base64", endpoint, e.message); } );
    }

    // session state
    const language = "RO";

    // form state
    const [communityName, liveset_communityName] = useState("less random");
    const [description, liveset_description] = useState("");
    const [images, liveset_images] = useState([]);
    const [images_toURL, liveset_images_toURL] = useState(null);

    // .after render
    // <TODO> this can be conditionalized, such that images might or might not be displayed
    useEffect( () => {
        if(images.length > 0) {
            const local_imagesURL = [];
            images.forEach( (image) => {
                local_imagesURL.push(URL.createObjectURL(image));
                // (!) <TODO> Please note, on page reload or on re-render these strings will have to be re-built
            } );

            liveset_images_toURL(local_imagesURL);
        }
    }, [images]);

    // .jsx
    return (
        <>
                <label>{Translation[language]["Form"]["community_name_label"]}</label> <input type="text" required onChange={ (e) => { liveset_communityName(e.target.value); } } placeholder={Translation[language]["Form"]["community_name_placeholder"]}/>
                <br/><label>{Translation[language]["Form"]["description_label"]}</label> <textarea required onChange={ (e) => { liveset_description(e.target.value); } } placeholder={Translation[language]["Form"]["description_placeholder"]}></textarea>
                <br/><label>Upload file(s):</label> <input type="file" multiple accept="image/*" onChange={ (e) => { liveset_images([...e.target.files]); } }/>
                <button onClick={ () => { HTTPRequest_POST_JSON(Endpoints["local"]["forms"], {communityName, description}); } }>Form</button>
                <button onClick={ () => { images.map( (image) => { toBase64(image, (_) => { HTTPRequest_POST_Base64(Endpoints["local"]["images"], _); }) }); } }>Image</button>

            { images_toURL && images_toURL.map( (image_toURL, index_image) => <img src={image_toURL} width="100px" height="100px" key={index_image}></img> ) }
        </>
    );
    // <!-- how to do a + bx ? => FSA + x.map() -->

/// <TODO>
    // <choice UI> list of options: load an image from Desktop or offer a wizard or get it from text URL->endpoint
    // preview image
    // encode image into bae64
    // stringify ? or just send it over to the URL endpoint (under a button's trigger)
}

/// ----