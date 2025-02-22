import React, { JSX } from "react";


const a: JSX.Element = <div tabIndex={0}>
    <span>
        {1 + 1}
    </span>
</div>;
//аналогия выше
const b: JSX.Element = React.createElement("div", {tabIndex: 0}, 1+1)
let d;
const c = d as string;