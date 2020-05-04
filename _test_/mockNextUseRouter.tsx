import React from 'react';

const useRouter = jest.spyOn(require("next/router"), "useRouter");

export function mockNextUseRouter(props: {
    route: string;
    pathname: string;
    query: string;
    asPath: string;
}) {
    useRouter.getMockImplementation()
    (() => ({
        route: props.route,
        pathname: props.pathname,
        query: props.query,
        asPath: props.asPath,
    }));
}
