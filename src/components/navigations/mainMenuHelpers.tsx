import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react'
import arrowLeft from './arrow-left.svg'
import chevronRight from './chevron-right.svg'

//Put arrow to go forward in menu  
const childParametersForward = (href: string | undefined, heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined) =>
    <>
        <a href={href} className="forward">{heading}</a>
        {/* @ts-ignore */}
        <a role="button" aria-hidden="true" id={heading} className={`forward nav-arrow`}>
            <div className="icon-container">
                <img className="icon" aria-hidden="true" src={chevronRight}></img>
            </div>
        </a>
    </>


//Put arrow to go backwards in menu
const childParametersBackwards= (href: string | undefined, heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => 
    <>
        <a href={href} className="back">
            <img className="icon" aria-hidden="true" src={arrowLeft}></img>
            {heading}
        </a>
    </>

//Entries that don't have other levels
const itemMenuWithoutChildren = (href: string | undefined, heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => 
    <>
        <a href={href}>{heading}</a>
    </>

//Get currentItem bool to highlight the entry and begin the menu with the current item
// @ts-ignore
export const findCurrentItem = (level: any, parent: any, parentMenus: any) => {

    const found = level.filter((x: { currentItem: boolean }) => x.currentItem === true)

    if(found.length > 0) {
        return {found: found[0], items: level, parent, parentMenus}
    }

    // If not iterate over each menu item and find if it's the next level.
    let foundDeep
   
    for (let item of level) {
        const {menus, link, heading} = item

        if(menus) {
            foundDeep = findCurrentItem(menus, {heading, link, menus}, level)
            if(foundDeep) {
                return foundDeep
            }    
        }
    }
}

//Find menu entries when click in menu
// @ts-ignore
export const findMenuDisplay = (forward: any, getValueClassName: any, labelClassName: any, level: any, parent: any, parentMenus: any) =>{

    const found = (level || []).filter((x: { heading: any }) => x.heading === labelClassName)

    //get data of menu if user goes forward in the menu
    if(forward && found.length > 0) {
        return {parent: found[0], items:found[0].menus}
    }
    
    //Get data of menu if user goes backwards in the menu
    if(found.length > 0) {

        return {found: found[0], items: level, parent, parentMenus}
    }

    // If not iterate over each menu item and find if it's the next level.
    let foundDeep
   
    for (let item of (level || [])) {
        const {menus, link, heading} = item

        if(menus) {
            foundDeep = findMenuDisplay(forward, getValueClassName, labelClassName, menus, {heading, link, menus}, level)
            if(foundDeep) {
                return foundDeep
            }    
        }
    }
}

//Render the menu if there are menus
export const renderWithParentWithMenus = (values: { currentItem: any; link: any; heading: any }, i: Key | null | undefined) =>{
    return (
        values.currentItem
        ? 
            <li key={i} className={`current-menu-item menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
        : 
            <li key={i} className={`menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
    )
} 

//Render the menu if there aren't menus
export const renderWithParentWithoutMenus = (values: { currentItem: any; link: any; heading: any }, i: Key | null | undefined) =>{
    return (
        values.currentItem
        ?
            <li key={i} className={`current-menu-item`}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
        :
            <li key={i} className={``}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
    )
} 

//Render the menu if parent exist
export const renderWithParent = (parent: { link: any; heading: any }, isParent: string, allChildren: any[]) => {
    return (
        //Parent Menu
        <li className={`${isParent} menu-has-item-children`}>{childParametersForward(parent.link, parent.heading)}
            <ul>
                {
                    //Nav back
                    <li className="nav-back">{childParametersBackwards(parent.link, parent.heading)}</li>
                }
                {
                    /*
                        If children have menus, add property to class
                        Same if currentItem is true
                    */
                    allChildren.map((values: { menus: any }, i: any) => 
                        // @ts-ignore
                        values.menus ? renderWithParentWithMenus(values, i) : renderWithParentWithoutMenus(values, i)
                    )
                }
            </ul>
        </li>
    )
}

//Render the menu if the parent doesn't exist (first level menu)
export const renderWithoutParent = (allChildren: any) => {
    return (
        allChildren.map((values: { menus: any; link: any; heading: any }, i: Key | null | undefined) =>
        values.menus 
            ?
                <li key={i} className={`menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
            :
                <li key={i} className={``}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
        ) 
    )
}


