import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

type TokenLinkProps = {href: string};

const TokenLink: React.FunctionComponent<TokenLinkProps> = ({children, href}) => {
    const router = useRouter();
    const token = router.query.token;
    const hrefLink = `${href}?token=${token}`;
    return (
        <Link href={hrefLink}>
            {children}
        </Link>
    )
}

export default TokenLink;
