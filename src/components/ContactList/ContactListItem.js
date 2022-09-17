import React from "react";

export default function ContactListItem({name, id}) {
    return (
<li key={id}>{name}
 </li>
    )
};

