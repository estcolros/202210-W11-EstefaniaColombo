import { SyntheticEvent, useEffect, useState } from 'react';
import { FormPersonalType, Personal } from '../../models/form.personal';
export function FormPersonal({
    handleAdd,
    handleNext,
}: {
    handleAdd: (personal: Partial<FormPersonalType>) => void;
    handleNext: () => void;
}) {
    const initialFormData: Partial<FormPersonalType> = {
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        newsLetter: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const handleInput = (ev: SyntheticEvent) => {
        console.log('Input');
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleChange = () => {
        console.log('Change');
        setFormData({ ...formData, newsLetter: !formData.newsLetter });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new Personal(
                formData.name as string,
                formData.lastName as string,
                formData.birthDate as string,
                formData.gender as string,
                formData.email as string,
                formData.newsLetter as boolean
            )
        );
        setFormData(initialFormData);
        handleNext();
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <section>
            <h3>Personal data</h3>
            <form className="form-personal" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="birthDate">Birth Date </label>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        placeholder="Enter your birthdate"
                        value={formData.birthDate}
                        onInput={handleInput}
                        required
                    />
                    {/* Calcular edad  */}
                    <label> Age(counter):</label>
                </div>
                <div>
                    <label htmlFor="gender">Gender </label>
                    <input
                        type="radio"
                        name="gender"
                        id="gMale"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleInput}
                        required
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        id="gFemale"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleInput}
                        required
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        id="gOther"
                        placeholder="Select your gender"
                        value="Other"
                        checked={formData.gender === 'Other'}
                        onChange={handleInput}
                        required
                    />
                    Other
                    <input
                        type="radio"
                        name="gender"
                        id="gNotMention"
                        placeholder="Select your gender"
                        value="Prefer not to mention"
                        checked={formData.gender === 'Prefer not to mention'}
                        onChange={handleInput}
                        required
                    />
                    Prefer not to mention
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newsLetter">
                        Would you like to receive information about our
                        newsletter?
                    </label>
                    <input
                        type="checkbox"
                        name="newsLetter"
                        id="newsLetter"
                        defaultChecked={formData.newsLetter}
                        onInput={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit"> Continue ➡️</button>
                </div>
            </form>
        </section>
    );
}
