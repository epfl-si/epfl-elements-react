import './index.css'
import '@epfl/epfl-elements-styles/dist/css/combined.css'

type Callback = () => void;

type MetaboxProps = {
    eventTitle?: string;
    metaboxDetails?: Array<any>;
    onClickFn?: Callback;
    labelButton?: string;
    organizer?: Array<any>;
}

export function Metabox ({
    eventTitle,
    metaboxDetails,
    onClickFn,
    labelButton,
    organizer,
}: MetaboxProps) {  

    const getOrganizer = () => 
        
        //Get data of organizer
        (organizer || []).map(item =>     
            <div className="mt-3">
                <p className="mb-2">{item.label}</p>
                <div className="avatar-teaser">
                    <a className="avatar-teaser-img" href={item.link}>
                        <img src={item.srcImage} alt={item.altImage}/>
                    </a>
                    <div className="avatar-teaser-body">
                        <p>{item.personName}</p>
                    </div>
                </div>
            </div>
        )

    // Add a button and onClick option
    const getButtonAction = () => 
        <div className="mt-auto align-self-end">
            <button className="btn btn-primary" onClick={() => onClickFn && onClickFn()}>{labelButton}</button>
        </div>

    const getMetaboxDetails = () => 

        //Get Content of Metabox Table
        <>
            <div className="border col-md-5 bg-gray-100">
                {/* @ts-ignore */}
                <div className="d-flex flex-column py-3 bg-gray-20">
                    <h4>{eventTitle}</h4>
                    <table className="table h-100 metabox">
                        <tbody>
                            {
                                /* 
                                    Get data to fill the table.
                                    If there is a link map, then it will put the data in <a> tag inside <td> tag
                                    If not, it puts the data in the <td> tag
                                */
                                (metaboxDetails || []).map ((item, i) => 
                                item.key && 
                                <tr> 
                                        <td>{item.key}</td> 
                                        {item.link ? <td key={i}><a href={item.link}>{item.value}</a></td> : <td key={i}>{item.value}</td>}
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                    {getOrganizer()}
                    {getButtonAction()}
                </div>
            </div>
        </>
        
    //Return all Metabox data
    return (
        <>

            {metaboxDetails && getMetaboxDetails()}
            {!metaboxDetails && console.error("The component must have the metaboxDetails array to work")}
        
        </>
    )
}
