import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";


type QueryTokenProps = {children: React.ReactNode, href: string}

const QueryToken = ({children, href}:QueryTokenProps) => {
  const router = useRouter();
  return (
      <Link href={`${href}?token=${router.query.guid}`}>
          {children}
      </Link>
  )
};

export default QueryToken;