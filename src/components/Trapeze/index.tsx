
type TrapezeProps = {
    direction?: string;
    text?: string;
    link?: string;
    pseudo?: boolean
}

export function Trapeze ({ text, link, direction, pseudo, }: TrapezeProps) {         

    function getTextTrapeze() {
        return (
            <div className="card-body">
                {text}
            </div>
        )
    }

    const standardTrapeze = () => 
        <> 
            <a href={link} className={`trapeze-${direction}-container`}>
                <div className={direction === "horizontal" ? "card mb-0" : "card"}>
                    {getTextTrapeze()}
                </div>
                <span className={`trapeze-${direction}`}></span>
            </a>
        </>

    const pseudoTrapeze = () => 
        <>
            <a href={link} className={`card link-trapeze-${direction}`}>
                {getTextTrapeze()}
            </a>
        </>

    return (
        <>
            {!pseudo && standardTrapeze()}
            {pseudo && pseudoTrapeze()}
        </>
    )
}
