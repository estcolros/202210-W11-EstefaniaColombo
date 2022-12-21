import { useEffect, useState } from 'react';
import { FormAccessType } from '../../models/form.access';
import { FormPersonalType } from '../../models/form.personal';
import { FormAccess } from '../form.acces/acces';
import { FormConfirm } from '../form.confirm/confirm';
import { FormLogin } from '../form.login/login';
import { FormPersonal } from '../form.personal/personal';
export function FormMain() {
    const initialFormDataPersonal: FormPersonalType = {
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        newsLetter: false,
    };

    const initialFormDataAcces: FormAccessType = {
        userName: '',
        password: '',
        repeatPassword: '',
        accountType: '',
    };

    const [formDataPersonal, setFormDataPersonal] = useState(
        initialFormDataPersonal
    );
    const [formDataAccess, setFormDataAccess] = useState(initialFormDataAcces);

    const [counter, setCounter] = useState(0);

    function handleNext() {
        setCounter(counter + 1);
    }
    function handlePrevious() {
        setCounter(counter - 1);
    }

    function handleAddFormDataPersonal(data: Partial<FormPersonalType>) {
        setFormDataPersonal({
            ...formDataPersonal,
            ...data,
        });
    }

    function handleAddFormDataAccess(data: Partial<FormAccessType>) {
        setFormDataAccess({
            ...formDataAccess,
            ...data,
        });
    }

    useEffect(() => {
        console.log(formDataPersonal);
    }, [formDataPersonal]);

    useEffect(() => {
        console.log(formDataAccess);
    }, [formDataAccess]);

    return (
        <>
            {counter === 0 && (
                <FormPersonal
                    handleAdd={handleAddFormDataPersonal}
                    handleNext={handleNext}
                ></FormPersonal>
            )}
            {counter === 1 && (
                <FormAccess
                    handleAdd={handleAddFormDataAccess}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                ></FormAccess>
            )}
            {counter === 2 && (
                <FormConfirm
                    formDataPersonal={formDataPersonal}
                    formDataAccess={formDataAccess}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                ></FormConfirm>
            )}
            {/* Formulario login + results  */}
            {counter === 3 && (
                <FormLogin handlePrevious={handlePrevious}></FormLogin>
            )}
        </>
    );
}
