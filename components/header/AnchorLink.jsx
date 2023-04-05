import { Link } from "react-scroll";
import React from "react";

function AnchorLink({ name, to, onClick }) {
    return (
        <Link
            onClick={onClick}
            to={to}
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
        >
            {name}
        </Link>
    );
}

export default AnchorLink;
