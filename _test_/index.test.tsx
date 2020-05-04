import React from 'react';
import {render} from '@testing-library/react';
import Home from "../pages";
import { RouterContext } from 'next-server/dist/lib/router-context'
import {mockNextUseRouter} from "./mockNextUseRouter";

test('Check that the home page renders', async () => {
    
    const router = mockNextUseRouter({
        route: "/testpage",
        pathname: "/testpage",
        query: "",
        asPath: `/testpage?token=${encodeURIComponent("100")}`
    });
    
   const Home = require('../pages/testpage').default;
   
    const home = render(
        
        <RouterContext.Provider value={Home(router)}>
            <Home/>
        </RouterContext.Provider>
        )
    ;
    const tag = home.getByTestId('page-render-test');

    expect(tag).toBeInTheDocument();
});

