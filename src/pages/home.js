import { React } from "react"

import { SearchBar } from "../components/search"
import { Map } from "../components/map"
import { Feed } from "../components/feed"
import { Form } from "../components/form"

export function Home () {
    return (
        <>
            <Form />
            <SearchBar/>
            <Map/>
            <Feed/>
        </>
    );
}