﻿import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

type TokenLinkProps = {children: React.ReactNode; href: string; as: string}

const TokenLink: React.FunctionComponent<TokenLinkProps> = ({children, href}: TokenLinkProps) => {
  const router = useRouter();
    const token = router.query.token;
  let link = "";
  if(token === undefined) {
      link = '/404Error';
  } else { link = `${href}?token=${token}`}

  return (
      <Link href={link}>
          {children}
      </Link>
  )
};

export default TokenLink;
