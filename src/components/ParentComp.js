import React, { useCallback } from "react";
import { useState } from "react";
import Title from "./Title";
import Count from "../Count";
import Button from "./Button";
function ParentComp() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button Click={incrementAge}>increment Age :</Button>
            <Count text="Salary" count={salary} />
            <Button Click={incrementSalary}>incrementSalary :</Button>
        </div>
    )
}
export default ParentComp;