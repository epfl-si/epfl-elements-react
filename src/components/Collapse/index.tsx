import { useState } from 'react'

type CollapseProps = {
    complexHeader?: boolean;
    partialCollapse?: boolean;
    headerTitle?: string;
    headerListValues?: Array<any>;  
    idCollapse?: string;
    text?: Array<any>;
    textTitles?: Array<any>;
    label?: string;
}

export function Collapse ({
    complexHeader,
    idCollapse,
    text,
    textTitles,
    label,
    headerTitle,
    headerListValues,
    partialCollapse,
}: CollapseProps) {

    //State to show or hide text
    const [stateCollapseText, setStateCollapseText] = useState(false)

    //Change state function
    const onClickFn = ()  => {
        if(stateCollapseText) {
            setStateCollapseText(false)
        } else {
            setStateCollapseText(true)
        }
    }

    //Choosing between the collapse button/header or the partial collapse button. They have different classes
    const classNameFn = partialCollapse ? 'collapsed btn btn-light btn-block btn-sm mt-3' : 'collapse-title collapse-title-desktop collapsed'
    const classDivNameFn = partialCollapse ? 'collapse collapse-partial' : 'collapse collapse-item collapse-item-desktop collapsed'
    
    //Get text with or without titles and pass "show" in className to show or hide the text
    const getText = () =>
    <div className={stateCollapseText ? `${classDivNameFn} show` : classDivNameFn} id={idCollapse}>
        {
            (text || []).map((item, i) => 
            {
                if(textTitles) {
                    return (
                        <>
                            <h3>{textTitles[i]}</h3> 
                            <p key={i}>{item}</p>
                        </>
                    )
                } else {
                    return (
                        <>
                            <p key={i}>{item}</p>
                        </>
                    )
                }
            })
        }
    </div>

    //Button parameters and label
    const buttonParameters = () => 
        <>
            <button
                className={classNameFn}
                data-label={label}
                data-target={`#${idCollapse}`}
                data-toogle="collapse"
                aria-controls={idCollapse}
                aria-expanded={stateCollapseText}
                onClick={() => onClickFn()}
            >
                {label}
            </button>
            
        </>
    
    //Put text and button together and depend on the collapse option, put the text above or under the button
    const collapseButtonAndText = () =>
    {
        if(partialCollapse) {
            return (
                <>
                    {getText()}
                    {buttonParameters()}
                </>
            )
        } else {
            return (
                <>
                    {buttonParameters()}
                    {getText()}
                </>
            )
        }    
    }

    //Show header collapse button with the text
    const headerParametersAndText = () =>
    <> 
        <header
            className={classNameFn}
            data-target={`#${idCollapse}`}
            data-toogle='collapse'
            aria-controls={idCollapse}
            aria-expanded={stateCollapseText}
            onClick={() => onClickFn()}
        >
            <p
                className='title'
            >
                {headerTitle}
            </p>
            <ul 
                className='list-inline has-sep small text-muted'
            >
                {
                    (headerListValues || []).map((item, i) => 
                        <li key={i}>{item}</li>
                    )
                }
            </ul>
        </header>
        {getText()}
    </>
    
    //Return all the diferents collapses
    return (
        <>
            {!complexHeader && collapseButtonAndText()}
            {complexHeader && headerParametersAndText()}
            
        </>
    )
}
