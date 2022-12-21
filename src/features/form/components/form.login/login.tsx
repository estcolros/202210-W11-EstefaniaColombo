import { SyntheticEvent, useEffect, useState } from 'react';
import { FormLoginType } from '../../models/form.login';
export function FormLogin({ handlePrevious }: { handlePrevious: () => void }) {
    const initialFormData: Partial<FormLoginType> = {
        userName: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const handleInput = (ev: SyntheticEvent) => {
        console.log('Input');
        const element = ev.target as HTMLFormElement;
        setFormData({
            ...formData,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();

        setFormData(initialFormData);
    };

    const handleLast = () => {
        handlePrevious();
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <section>
            <h3>Login</h3>
            <form className="form-login" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Username </label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter your username"
                        value={formData.userName}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onInput={handleInput}
                        required
                    />
                </div>

                <div>
                    <button type="button" onClick={handleLast}>
                        Previous
                    </button>
                    <button onClick={handleSubmit} type="submit">
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
}
