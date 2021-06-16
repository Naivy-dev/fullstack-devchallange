import React, { useState, useEffect } from 'react'

const useRegister = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({})
    const handleInput = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInput
    };
}

export default useRegister;