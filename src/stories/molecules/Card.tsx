import React from 'react';
import {Button} from "./Button.tsx";
import './card.css'

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  icon?: string;
  onClickIcon?: () => void;
  onClickItem?: () => void;
  style?: Style;
}

/**
 * A card  with title, children for the body and a button for an action
 */
export const Card = ({
  title,
  children,
  icon,
  onClickIcon,
  onClickItem,
  style,
}: CardProps) => {

  let leftDivStyle = "flex-fill";
  if(icon) {
    leftDivStyle = "flex-item-left";
  }

  return (
      <div className="card" style={style}>
          <div className={leftDivStyle} onClick={onClickItem}>
            {title ? <h5 className="card-text">{title}</h5> : (<></>)}
            {children}
          </div>
          {icon ? <div className="flex-item-right">
            <Button size="icon"
                          iconName={icon}
                          onClick={onClickIcon}/>
          </div> : <></>}
      </div>
  );
};
