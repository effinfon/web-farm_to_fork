import { React, useState } from "react"

import { Pages, Files, Classes } from "../configuration"
import { Home } from "../pages/home"

export function Root() {
  return (
    <div className={Classes["root_div"]}>
      <Home />
    </div>
  );
}