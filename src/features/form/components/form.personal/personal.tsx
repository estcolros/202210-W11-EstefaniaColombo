import { SyntheticEvent, useState } from 'react';
import { FormPersonalType, Personal } from '../../models/form.personal';
export function FormPersonal({
    handleAdd,
}: {
    handleAdd: (personal: FormPersonalType) => void;
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

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new Personal(
                formData.name as string,
                formData.lastName as string,
                formData.birthDate as string,
                formData.gender as string,
                formData.email as string
            )
        );
        setFormData(initialFormData);
    };

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
                        // value={formData.name}
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
                        // value={formData.lastName}
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
                        // value={formData.birthDate}
                        required
                    />
                    <label> Age(counter):</label>
                </div>
                <div>
                    <label htmlFor="gender">Gender </label>
                    <input
                        type="radio"
                        name="gender"
                        id="gMale"
                        // value={formData.gender}
                        required
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        id="gFemale"
                        // value={formData.gender}
                        required
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        id="gOther"
                        placeholder="Select your gender"
                        // value={formData.gender}
                        required
                    />
                    Other
                    <input
                        type="radio"
                        name="gender"
                        id="gNotMention"
                        placeholder="Select your gender"
                        // value={formData.gender}
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
                        // value={formData.email}
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
                        // checked={formData.newsLetter}
                        required
                    />
                </div>
                <div>
                    <button>Continue</button>
                </div>
            </form>
        </section>
    );
}
