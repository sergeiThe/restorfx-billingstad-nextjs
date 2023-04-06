import Link from "next/link";
import React from "react";

function PageLink({ name, to, onClick }) {
    return (
        <Link href={to} onClick={onClick}>
            {name}
        </Link>
    );
}

export default PageLink;
