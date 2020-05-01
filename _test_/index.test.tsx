import React, {FunctionComponent} from 'react';
import {render} from '@testing-library/react';
import Home from "../pages";
import { RouterContext } from 'next-server/dist/lib/router-context'


test('Check that the home page renders', async () => {
   const router = {
       query:{token: "undefined"},
   };
    const home = render(
        <RouterContext.Provider value={router.query}>
            <Home/>
        </RouterContext.Provider>
        )
    ;
    const tag = home.getByTestId('page-render-test');
    expect(tag).toBeInTheDocument();
});

