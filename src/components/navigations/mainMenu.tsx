import { useState, useEffect } from 'react'

export type MenuItemProps = {
    heading: string;
    link: string;
    currentItem?: boolean;
    menus?: Array<MenuItemProps>; 
}

type MainMenuProps = {
    mainMenuStructure?: Array<MenuItemProps>
}

// Import helpers functions.
import {
    renderWithParent,
    renderWithoutParent,
    findCurrentItem,
    findMenuDisplay
} from './mainMenuHelpers'

export function MainMenu ({
    mainMenuStructure,
}: MainMenuProps) {      
     
    //States to change properties of the menu
    const [ancestorOrParentClass, setAncestorOrParentClass] = useState('current-menu-parent');
    const [navContainerMenu, setNavContainerMenu] = useState('current-menu-ancestor');

    //State to change display menu
    const [changeMenu, setChangeMenu]= useState();

    //Function that will make the changes on the menu according with the users clicks
    function clickHandler(event: any) {
        
        //Prevent href redirection when click on it
        event.preventDefault()

        //Get forward property of class when user click to move forwards in menu
        const forward = event.target.offsetParent.className.includes("forward")

        //Get value of class when user move backwards
        const backwardsClassName = 
            event.target.className.includes("icon") || 
            event.target.className.includes("icon-container") ? 
                event.target.offsetParent.id : event.target.className 

        //Condition to get label of class if the user move forwards or backwards
        const labelClassName = event.target.textContent ? event.target.textContent : event.target.offsetParent.id

        //Call function to get menu data to display it
        const foundMenuDisplay = findMenuDisplay(forward, backwardsClassName, labelClassName, mainMenuStructure, undefined, undefined)

        //Change menu if user goes back in menu
        if(backwardsClassName === "back") {

            //Change state to change display menu
            setChangeMenu(foundMenuDisplay)

            //Condition to see if the user is in the first level of the menu
            if(foundMenuDisplay.parent == undefined){

                //Change menus parent and ancestor properties
                setNavContainerMenu('current-menu-parent')
                setAncestorOrParentClass('')
            }
        //Change menu if user click on forward 
        } else if(forward){

            //Change state to get the current menu to get parent and the menu forward to get children
            setChangeMenu(foundMenuDisplay)

            //Return to the older states if the user goes outside the first level menu
            if(foundMenuDisplay.parent != undefined) {

                //Change State if the user is in first level and go deeper in menu
                setNavContainerMenu('current-menu-ancestor')
                setAncestorOrParentClass('current-menu-parent')
            }
        }   
    }

    /*
        Variables to get the menu data to display it
        If found doesn't exist (current item doesn't exist) so the first level will be displayed to the user
        If found exist the menu is displayed normaly
    */
    const found = changeMenu
        ? changeMenu
        : findCurrentItem(mainMenuStructure, undefined, undefined)
    const allChildren = found
        ? found.items.map(({heading, link, currentItem, menus}: any) => ({heading, link, currentItem, menus}))
        : (mainMenuStructure || []).map(values => values);
    const parent = found ? found.parent : '';


    //Change state if current item doesn't exist (found)
    useEffect(() => {
        if(!found) {
            setNavContainerMenu('current-menu-parent')
            setAncestorOrParentClass('')
        }
    })        

    //Put menu together
    const getMainMenu = () => {
        return (
            <>
            <div className="nav-solid-layout">
               <div className="overlay"></div>
                    <nav className="nav-main" id="main-navigation" role="navigation">
                        <div className="nav-wrapper">
                            <div className={`nav-container ${navContainerMenu}`} onClick={clickHandler} >
                                <ul className="nav-menu">
                                    { 
                                        //Condition to display the menu with parent or without parent if parent exist
                                        parent 
                                            ? renderWithParent(parent, ancestorOrParentClass, allChildren)
                                            : renderWithoutParent(allChildren)
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }    
    
    //Render the menu
    return (
        <>
            {getMainMenu()}
        </>
    )
}
