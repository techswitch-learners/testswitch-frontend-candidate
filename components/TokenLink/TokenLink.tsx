import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";


type TokenLinkProps = {children: React.ReactNode, href: string};

const TokenLink: React.FunctionComponent<TokenLinkProps> = ({children, href}: TokenLinkProps) => {
  const router = useRouter();
  
  return (
      <Link href={`${href}?token=${router.query.token}`}>
          {children}
      </Link>
  )
    
};

export default TokenLink;