import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { BrowserRouter } from 'react-router-dom';

describe('ProductCard', () => { 
    it('should display a title based on props', () => {

        render (<BrowserRouter><ProductCard product={{ name: 'test product', url: 'http://placekitten.com/100/100', price: 5.00,id: 1}} /></BrowserRouter>);
        const title = screen.getByText(/test product/i);
        expect(title).toBeInTheDocument();

    });

        it('should display price based on props', () => {
        render (<BrowserRouter><ProductCard product={{ name: 'test product', url: 'http://placekitten.com/100/100', price: 5.00,id: 1}} /></BrowserRouter>);
        const price = screen.getByText(/5/i);
        expect(price).toBeInTheDocument();

        });
    
    it('should render a see more button', () => {

        render (<BrowserRouter><ProductCard product={{ name: 'test product', url: 'http://placekitten.com/100/100', price: 5.00,id: 1}} /></BrowserRouter>);
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();

    });
})


