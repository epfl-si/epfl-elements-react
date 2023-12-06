import React from 'react';
import {Button} from "./Button";
import '../assets/custumStyles.css';
import featherIcons from "../assets/elements-dist-frontend/icons/feather-sprite.svg";
import * as colorette from "colorette";
import {ColorProps, ColorValue} from "@storybook/blocks";

interface BadgeProps {
  title?: string;
  image?: string;
  border?: 'none' | 'solid' | 'dashed' | 'dotted';
  icon?: string;
  textColor?: ColorValue;
  fontWeight: 'normal' | 'bold';
  onClickIcon?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({
    title,
    icon,
    border = 'none',
    image,
    fontWeight = 'normal',
    textColor,
    onClickIcon
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
    <div className={cardStyle}>
      <div className="d-flex flex-row justify-content-between" style={{alignItems: 'center'}} >
        <img src={image} style={{width: '50px', marginRight: '5px'}}/>
        <span style={{ fontWeight: fontWeight, fontSize: "smaller", color: textColor}}>{title}</span>
        <div className="d-flex justify-content-center">
          <span className="badge">9</span>
          {icon ? <Button size="icon"
                             iconName={icon}
                             onClick={onClickIcon}/> : <></>}</div>
      </div>
    </div>
  );
};
