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
                <li>Name: {formDataPersonal.name}</li>
                <li>Last Name: {formDataPersonal.lastName}</li>
                <li>Birth Date: {formDataPersonal.birthDate}</li>
                <li>Gender: {formDataPersonal.gender}</li>
                <li>Email: {formDataPersonal.email}</li>
                <li>Newsletter: {formDataPersonal.newsLetter}</li>
                <li>Username: {formDataAccess.userName}</li>
                <li>Password: {formDataAccess.password}</li>
                <li>Repeat password: {formDataAccess.repeatPassword}</li>
                <li>Type of account: {formDataAccess.accountType}</li>
                <div>
                    <button type="button" onClick={handleLast}>
                        Previous
                    </button>
                    <button type="submit" onClick={handleNext}>
                        Confirm
                    </button>
                </div>
            </form>
        </section>
    );
}
