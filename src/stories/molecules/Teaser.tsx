import React from 'react';
import {Button} from "./Button";
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface TeaserProps {
  rightIcon?: string;
  leftIcon?: string;
  actifText?: boolean;
  title?: string;
  teaserText?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: Style;
}

/**
 * A teaser where the teaser icon and the right icon are clickable with different href
 */
export const Teaser = ({
  rightIcon,
  leftIcon,
  teaserText,
  actifText,
  title,
  onClick,
  style
}: TeaserProps) => {

  let textStyle = 'text-wrapper-enabled';
  if (!actifText) {
    textStyle = 'text-wrapper-disabled';
  }

  return <div className="avatar-teaser" style={{cursor: "pointer"}}
              onClick={(e) => { if (onClick) onClick(e) }}>
      {leftIcon ? <a className="avatar-teaser-img">
        <img src={leftIcon} />
      </a> : <></>}
      {teaserText ? <a className="avatar-teaser-img">
        <a className="avatar-teaser-img-placeholder">
          {teaserText}
        </a>
      </a> : <></>}
      <div className="avatar-teaser-body">
        <div className="d-flex flex-row justify-content-between">
          {title ? <p className={textStyle} style={style}>{title}</p> : <></>}
          {rightIcon ? <div className="icon-right">
            <Button size="icon" iconName={rightIcon}/>
          </div> : <></>}
        </div>
      </div>
    </div>
};
