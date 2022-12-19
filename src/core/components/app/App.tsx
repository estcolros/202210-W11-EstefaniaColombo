import React from 'react';
import FormPage from '../../../features/form/pages/form.page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './App.css';

export function App() {
    return (
        <>
            <Header></Header>
            <main>
                <FormPage></FormPage>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
