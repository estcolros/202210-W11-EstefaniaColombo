import { SyntheticEvent, useEffect, useState } from 'react';
import { Access, FormAccessType } from '../../models/form.access';
export function FormAccess({
    handleAdd,
    handleNext,
    handlePrevious,
}: {
    handleAdd: (access: Partial<FormAccessType>) => void;
    handleNext: () => void;
    handlePrevious: () => void;
}) {
    const initialFormData: Partial<FormAccessType> = {
        userName: '',
        password: '',
        repeatPassword: '',
        accountType: '',
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
        handleAdd(
            new Access(
                formData.userName as string,
                formData.password as string,
                formData.repeatPassword as string,
                formData.accountType as string
            )
        );
        setFormData(initialFormData);
        handleNext();
    };

    const handleLast = () => {
        handlePrevious();
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <section>
            <h3>Access data</h3>
            <form className="form-access" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Name </label>
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
                    <label htmlFor="repeatPassword">Repeat password </label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        minLength={6}
                        placeholder="Repeat your password"
                        value={formData.repeatPassword}
                        onInput={handleInput}
                        required
                    />
                </div>
                <label htmlFor="accountType">Type of account </label>
                <select
                    name="accountType"
                    id="accountType"
                    value={formData.accountType}
                    onChange={handleInput}
                >
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
                <div>
                    <button type="button" onClick={handleLast}>
                        Previous
                    </button>
                    <button type="submit">Continue</button>
                </div>
            </form>
        </section>
    );
}
