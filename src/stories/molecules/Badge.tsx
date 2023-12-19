import React from 'react';
import {Button} from "./Button";
import './badge.css';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface BadgeProps {
  title?: string;
  bedge: string;
  image?: string;
  icon?: string;
  cardStyle?: Style;
  textStyle?: Style;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * A clickable user badge
 */
export const Badge = ({
    title,
    bedge,
    icon,
    image,
    cardStyle = {},
    textStyle = {},
    onClick
  }: BadgeProps) => {

  return (
    <div className="card" style={cardStyle}
         onClick={(e) => { if (onClick) onClick(e) }}>
      <div className="d-flex flex-row justify-content-between badge-clickable badge-center" >
        <img src={image} className="image"/>
        <span style={textStyle}>{title}</span>
        <div className="d-flex justify-content-center">
          <span className="badge">{bedge}</span>
          {icon ? <Button size="icon"
                             iconName={icon}/> : <></>}</div>
      </div>
    </div>
  );
};
