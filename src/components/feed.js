import { React, useState } from "react"

export function Feed () {
    const [data, liveset_data] = useState(null);

    // fetch("https://crudcrud.com/api/a7272038c5b649a8ad22171dc31d6774/forms")
    // .then( (response) => { return response.json(); } )
    // .then( (json) => { console.log(json); } )

    return (
      <>
          <p>This is the feed; go fetch some data and cache it</p>
          { data && <p>Data has been loaded</p> }
      </>
    );
}