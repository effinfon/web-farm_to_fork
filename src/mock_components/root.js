import { React, useState } from "react"

import { Classes } from "../configuration"
import { Mock_UploadForm } from "./upload_form"

export function Mock_Root() {
    return (
        <div className={Classes["root_div"]}>
            <Mock_UploadForm />
        </div>
    );
}