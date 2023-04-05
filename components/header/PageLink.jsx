import Link from "next/link";
import React from "react";

function PageLink({ name, to }) {
    return <Link href={to}>{name}</Link>;
}

export default PageLink;
