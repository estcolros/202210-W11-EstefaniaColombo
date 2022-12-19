import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Given Layout component', () => {
    test('renders a Header', () => {
        render(
            <Layout>
                <div>Layout Test</div>
            </Layout>
        );

        const textElement = screen.getByText(/layout Test/i);
        expect(textElement).toBeInTheDocument();
    });
});
