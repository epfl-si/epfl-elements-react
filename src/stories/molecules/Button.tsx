import React from 'react';
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";
import './button.css';

interface ButtonProps {
  primary?: boolean;
  size?: 'icon' | 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  iconName?: string;
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
  onClick,
  ...props
  }: ButtonProps) => {

  if (size === 'icon') {
    return <svg key="icon" className="icon" aria-hidden="true" style={{ cursor: 'pointer', width: '25px', height: '25px' }}
                onClick={(e) => { if (onClick) onClick(e) }}>
      <use xlinkHref={`${featherIcons}${iconName}`}/>
    </svg>
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
      type="button"
      className={mode}
      onClick={(e) => { if (onClick) onClick(e) }}
      disabled={isDisabled ? isDisabled : false}
      {...props}
    >
      <div className="text-center button-text">
        {children}
      </div>
    </button>
  }
};
