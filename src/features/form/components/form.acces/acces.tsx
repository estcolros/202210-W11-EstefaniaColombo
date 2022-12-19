import { SyntheticEvent, useState } from 'react';
import { Access, FormAccessType } from '../../models/form.access';
export function FormAccess({
    handleAdd,
}: {
    handleAdd: (access: FormAccessType) => void;
}) {
    const initialFormData: Partial<FormAccessType> = {
        userName: '',
        password: '',
        repeatPassword: '',
        accountType: '',
    };

    const [formData, setFormData] = useState(initialFormData);

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
    };
    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({
            ...formData,
            [element.name]:
                element.type === 'checkbox' ? element.checked : element.value,
        });
    };

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
                        //value={formData.userName}
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
                        //value={formData.password}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="birthDate">Repeat password </label>
                    <input
                        type="password"
                        name="repeat-password"
                        id="repeat-password"
                        placeholder="Repeat your password"
                        //value={formData.repeatPassword}
                        required
                    />
                </div>
                <select name="accountType" onChange={handleForm}>
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
                <div>
                    <button>Previous</button>
                    <button>Continue</button>
                </div>
            </form>
        </section>
    );
}
