import React from 'react';
import {Button} from "./Button";

interface TeaserProps {
  rightIcon?: string;
  leftIcon?: string;
  actifText?: boolean;
  title?: string;
  teaserText?: string;
  hrefTeaser?: string;
  hrefRightIcon?: string;
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
  hrefTeaser,
  hrefRightIcon
}: TeaserProps) => {

  let textStyle = 'text-wrapper-enabled';
  if (!actifText) {
    textStyle = 'text-wrapper-disabled';
  }

  return <div className="avatar-teaser">
      {leftIcon ? <a className="avatar-teaser-img">
        <img src={leftIcon} />
      </a> : <></>}
      {teaserText ? <a className="avatar-teaser-img">
        <a className="avatar-teaser-img-placeholder" href={hrefTeaser}>
          {teaserText}
        </a>
      </a> : <></>}
      <div className="avatar-teaser-body">
        <div className="d-flex flex-row justify-content-between">
          {title ? <p className={textStyle}>{title}</p> : <></>}
          {rightIcon ? <div className="icon-right">
            <a href={hrefRightIcon}>
              <Button size="icon"
                      iconName={rightIcon}/>
            </a>
          </div> : <></>}
        </div>
      </div>
    </div>
};
