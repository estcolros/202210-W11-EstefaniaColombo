import './header.css';

export function Header() {
    const title = 'React & TypeScript form';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
        </header>
    );
}
