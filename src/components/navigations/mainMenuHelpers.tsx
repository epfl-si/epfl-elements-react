import arrowLeft from './arrow-left.svg'
import chevronRight from './chevron-right.svg'
import { MenuItemProps } from './mainMenu'

//Put arrow to go forward in menu  
const childParametersForward = (href: string, heading: string) =>
    <>
        <a href={href} className="forward">{heading}</a>
        <a role="button" aria-hidden="true" id={heading} className={`forward nav-arrow`}>
            <div className="icon-container">
                <img className="icon" aria-hidden="true" src={chevronRight}></img>
            </div>
        </a>
    </>

//Put arrow to go backwards in menu
const childParametersBackwards= (href: string, heading: string) => 
    <>
        <a href={href} className="back">
            <img className="icon" aria-hidden="true" src={arrowLeft}></img>
            {heading}
        </a>
    </>

//Entries that don't have other levels
const itemMenuWithoutChildren = (href: string, heading: string) => 
    <>
        <a href={href}>{heading}</a>
    </>

//Get currentItem bool to highlight the entry and begin the menu with the current item
export const findCurrentItem = (
    level: Array<MenuItemProps>, 
    parent: MenuItemProps | undefined, 
    parentMenus: Array<MenuItemProps> | undefined
): any => {

    const found = level.filter(x => x.currentItem === true)

    if(found.length > 0) {
        return {found: found[0], items: level, parent, parentMenus}
    }

    // If not iterate over each menu item and find if it's the next level.
    let foundDeep
   
    for (const item of level) {
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
export const findMenuDisplay = (
    forward: boolean, 
    backwardsClassName: string, 
    labelClassName: string, 
    level: Array<MenuItemProps>, 
    parent: MenuItemProps | undefined, 
    parentMenus: Array<MenuItemProps> | undefined
): any => {

    const found = level.filter(x => x.heading === labelClassName)

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
   
    for (const item of level) {
        const {menus, link, heading} = item

        if(menus) {
            foundDeep = findMenuDisplay(forward, backwardsClassName, labelClassName, menus, {heading, link, menus}, level)
            if(foundDeep) {
                return foundDeep
            }    
        }
    }
}

//Render the menu if there are menus
export const renderWithParentWithMenus = (values: MenuItemProps, i: number) =>{
    return (
        values.currentItem
        ? 
            <li key={i} className={`current-menu-item menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
        : 
            <li key={i} className={`menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
    )
} 

//Render the menu if there aren't menus
export const renderWithParentWithoutMenus = (values: MenuItemProps, i: number) =>{
    return (
        values.currentItem
        ?
            <li key={i} className={`current-menu-item`}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
        :
            <li key={i} className={``}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
    )
} 

//Render the menu if parent exist
export const renderWithParent = (
    parent: MenuItemProps, 
    ancestorOrParentClass: string,
    allChildren: Array<MenuItemProps>
) => {
    return (
        //Parent Menu
        <li className={`${ancestorOrParentClass} menu-has-item-children`}>{childParametersForward(parent.link, parent.heading)}
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
                    allChildren.map((values, i) => 
                        values.menus ? renderWithParentWithMenus(values, i) : renderWithParentWithoutMenus(values, i)
                    )
                }
            </ul>
        </li>
    )
}

//Render the menu if the parent doesn't exist (first level menu)
export const renderWithoutParent = (allChildren: Array<MenuItemProps>) => {
    return (
        allChildren.map((values, i) =>
        values.menus 
            ?
                <li key={i} className={`menu-item-has-children`}>{childParametersForward(values.link, values.heading)}</li>
            :
                <li key={i} className={``}>{itemMenuWithoutChildren(values.link, values.heading)}</li>
        ) 
    )
}
