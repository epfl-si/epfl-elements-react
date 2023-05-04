import { useState } from 'react'
import '@epfl/epfl-elements-styles/dist/css/combined.css'
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
    // @ts-ignore
    const calculateRangeStyle = (value: number | undefined, minInput: number | undefined, maxInput: number | undefined) => `${String(value - minInput) * 100 / (maxInput - minInput)}% 100%`

    //State for showing dynamic value 
    const [currentValue, setCurrentValue] = useState(defaultValue)

    //State for styling the red part and the white part of the range slider
    const [rangeStyle, setRangeStyle] = useState(calculateRangeStyle(defaultValue, minInput, maxInput))

    //Function to get the input value
    const onInputValue = (event: { target: { value: any; max: any; min: any; }; }) => {
        
        //Get input value
        const valueOnInput = event.target.value;

        //Get max range value
        const maxOnInput = event.target.max;

        //Get min range value
        const minOnInput = event.target.min;

        //Transform dynamically the red part and the white part of the range slider 
        const currentStyleValue = calculateRangeStyle(valueOnInput, minOnInput, maxOnInput)
        
        //Update values in states functions
        setCurrentValue(valueOnInput)
        setRangeStyle(currentStyleValue)
    }
   
    //Range slider function
    const rangeSlider = () =>   
        <div className="form-group custom-control">
            {/* @ts-ignore */}
            <label for="rangeInput">{label}</label>
            {/* @ts-ignore */}
            <input type="range" name="range" className="form-control-range custom-range" min={minInput} max={maxInput} value={currentValue} step={setInput} style={{backgroundSize:rangeStyle}} id="rangeInput" onInput={onInputValue}/>
            <span className="output">
                {labelValue}
                <strong>
                    {/* @ts-ignore */}
                    <output for="rangeInput" id="rangeOutput" aria-hidden="true">{currentValue}</output>
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
