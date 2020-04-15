import React from 'react';
import {render} from '@testing-library/react';
import Home from "../pages";

test('Check that the home page renders',()=>{
    let home=render(<Home/>);
    const tag=home.getByTestId('page-render-test');
    expect(tag).toBeInTheDocument();
});