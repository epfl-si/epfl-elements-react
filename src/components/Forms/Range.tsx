import { useState } from 'react'
import 'epfl-elements/dist/css/elements.min.css'
import './Range.css'

type RangeProps = {
    minInput?: number;
    maxInput?: number;
    defaultValue?: number;
    setInput:number;
    label?: string;
    labelValue?: string
}

export function Range ({
    minInput,
    maxInput,
    defaultValue,
    setInput,
    label,
    labelValue
}: RangeProps) {

    //Function to calculate style range slider (red part and grey part)
    const calculateRangeStyle = (value: number, minInput: number, maxInput: number) => `${(value - minInput) * 100 / (maxInput - minInput)}% 100%`

    //State for showing dynamic value 
    const [currentValue, setCurrentValue] = useState(defaultValue)

    //State for styling the red part and the white part of the range slider
    const [rangeStyle, setRangeStyle] = useState(calculateRangeStyle(defaultValue, minInput, maxInput))

    //Function to get the input value
    const onInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        //Get input value
        const valueOnInput = Number(event.target.value);

        //Get max range value
        const maxOnInput = Number(event.target.max);

        //Get min range value
        const minOnInput = Number(event.target.min);

        //Transform dynamically the red part and the white part of the range slider 
        const currentStyleValue = calculateRangeStyle(valueOnInput, minOnInput, maxOnInput)
        
        //Update values in states functions
        setCurrentValue(valueOnInput)
        setRangeStyle(currentStyleValue)
    }
   
    //Range slider function
    const rangeSlider = () =>   
        <div className="form-group custom-control">
            <label htmlFor="rangeInput">{label}</label>
            <input type="range" name="range" className="form-control-range custom-range" min={minInput} max={maxInput} value={currentValue} step={setInput} style={{backgroundSize:rangeStyle}} id="rangeInput" onInput={onInputValue}/>
            <span className="output">
                {labelValue}
                <strong>
                    <output htmlFor="rangeInput" id="rangeOutput" aria-hidden="true">{currentValue}</output>
                </strong>
            </span>
        </div>

    //Return the range slider
    return (
        <>
            {rangeSlider()}
        </>
    )
}
