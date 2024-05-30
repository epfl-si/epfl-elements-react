import React from 'react';
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";
import './button.css';
import type * as CSS from "csstype";

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface ButtonProps {
  primary?: boolean;
  size?: 'icon' | 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  iconName?: string;
  label?: string;
  style?: Style;
  id?: string;
}

/**
 * A button.
 * It is also possible to have just an icon by giving the icon name
 */
export const Button = ({
  primary = true,
  size = 'medium',
  isDisabled = false,
  children,
  iconName,
  label,
  onClick,
  style = {},
  id,
  ...props
  }: ButtonProps) => {

  if (size === 'icon') {
    return <div style={style}>
      <svg key="icon" className="icon" aria-hidden="true"
           id={id}
           style={{ cursor: 'pointer', width: '25px', height: '25px' }}
           onClick={(e) => { if (onClick) onClick(e) }}>
      <use xlinkHref={`${featherIcons}${iconName}`}/>
    </svg></div>
  } else {
    let mode = primary ? 'button-box btn btn-primary' : 'button-box btn btn-secondary';

    switch (size) {
      case 'small':
        mode = mode.concat(' btn-sm');
        break;
      case 'large':
        mode = mode.concat(' btn-lg');
        break;
    }

    return <button
      id={id}
      type="button"
      className={mode} style={style}
      onClick={(e) => {
        if ( onClick ) onClick(e)
      }}
      disabled={isDisabled ? isDisabled : false}
      {...props}
    >
      <div>
        <svg
          aria-hidden="true"
          className="icon"
        >
          <use xlinkHref={iconName}/>
        </svg>
        <span
          style={{
            marginLeft: '5px'
          }}
        >
          {label}
        </span>
        <br />
        {children}
      </div>
    </button>
  }
};
