import { useState } from 'react';
import { FormAccess } from '../components/form.acces/acces';
import { FormPersonal } from '../components/form.personal/personal';
import { FormAccessType } from '../models/form.access';
import { FormPersonalType } from '../models/form.personal';

export default function FormPage() {
    const initialState: Array<FormPersonalType> = [];

    const [personals, setPersonal] = useState(initialState);
    const handleAdd = function (personal: FormPersonalType) {
        setPersonal([...personals, personal]);
    };

    return (
        <>
            <FormPersonal
                handleAdd={function (personal: FormPersonalType): void {
                    throw new Error('Function not implemented.');
                }}
            ></FormPersonal>
            <FormAccess
                handleAdd={function (access: FormAccessType): void {
                    throw new Error('Function not implemented.');
                }}
            ></FormAccess>
        </>
    );
}
