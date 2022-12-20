import { FormAccessType } from '../../models/form.access';
import { FormPersonalType } from '../../models/form.personal';

export function FormConfirm({
    formDataPersonal,
    formDataAccess,
    handleNext,
    handlePrevious,
}: {
    formDataPersonal: FormPersonalType;
    formDataAccess: FormAccessType;
    handleNext: () => void;
    handlePrevious: () => void;
}) {
    const handleLast = () => {
        handlePrevious();
    };
    return (
        <section>
            <h3>Data confirmation </h3>
            <form className="form-confirm">
                <div>
                    <label htmlFor="name">Name: {formDataPersonal.name}</label>
                </div>
                <div>
                    <label htmlFor="lasName">
                        Last Name: {formDataPersonal.lastName}
                    </label>
                </div>
                <div>
                    <label htmlFor="birthDate">
                        Birth Date: {formDataPersonal.birthDate}
                    </label>
                </div>
                <div>
                    <label htmlFor="gender">
                        Gender: {formDataPersonal.gender}
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email: {formDataPersonal.email}
                    </label>
                </div>
                <div>
                    <label htmlFor="userName">
                        Username: {formDataAccess.userName}
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password: {formDataAccess.password}
                    </label>
                </div>
                <div>
                    <label htmlFor="repeatPassword">
                        Repeat password: {formDataAccess.repeatPassword}
                    </label>
                </div>
                <div>
                    <label htmlFor="accountType">
                        Type of account: {formDataAccess.accountType}
                    </label>
                </div>
                <div>
                    <button type="button" onClick={handleLast}>
                        Previous
                    </button>
                    <button type="submit">Confirm</button>
                </div>
            </form>
        </section>
    );
}
