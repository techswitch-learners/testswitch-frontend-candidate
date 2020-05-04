import React from 'react';
import {render} from '@testing-library/react';
import Home from "../pages";
import * as NextRouter from "next/router";

test('Check that the home page renders', async () => {
    
    const mockNextUseRouter = jest.spyOn(NextRouter, "useRouter");
    //@ts-ignore 
    //esline-disable-next-line
    mockNextUseRouter.mockReturnValue({query: {token: "100"}});
   
    const home = render(<Home/>);
    
    const tag = home.getByTestId('page-render-test');

    expect(tag).toBeInTheDocument();
});
