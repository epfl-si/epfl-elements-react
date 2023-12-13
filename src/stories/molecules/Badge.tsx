import React from 'react';
import {Button} from "./Button";
import {ColorValue} from "@storybook/blocks";
import './badge.css';

interface BadgeProps {
  title?: string;
  image?: string;
  border?: 'none' | 'solid' | 'dashed' | 'dotted';
  icon?: string;
  textColor?: ColorValue;
  fontWeight: 'normal' | 'bold';
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * A clickable user badge
 */
export const Badge = ({
    title,
    icon,
    border = 'none',
    image,
    fontWeight = 'normal',
    textColor,
    onClick
  }: BadgeProps) => {

  let cardStyle: string = 'card';
  switch (border) {
    case 'solid':
      cardStyle = 'card card-solid';
      break;
    case 'dashed':
      cardStyle = 'card card-dashed';
      break;
    case 'dotted':
      cardStyle = 'card card-dotted';
      break;
  }

  return (
    <div className={cardStyle}
         onClick={(e) => { if (onClick) onClick(e) }}>
      <div className="d-flex flex-row justify-content-between clickable-center" >
        <img src={image} className="image"/>
        <span style={{ fontWeight: fontWeight, fontSize: "smaller", color: textColor}}>{title}</span>
        <div className="d-flex justify-content-center">
          <span className="badge">9</span>
          {icon ? <Button size="icon"
                             iconName={icon}/> : <></>}</div>
      </div>
    </div>
  );
};
