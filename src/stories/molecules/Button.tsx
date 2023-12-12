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

export const Button = ({
  primary = true,
  size = 'medium',
  isDisabled = false,
  children,
  iconName,
  onClick,
  ...props
  }: ButtonProps) => {
  let mode = primary ? 'storybook-button btn btn-primary' : 'storybook-button btn btn-secondary';

  switch (size) {
    case 'small':
      mode = mode.concat(' btn-sm');
      break;
    case 'large':
      mode = mode.concat(' btn-lg');
      break;
  }

  if (size === 'icon') {
    return <svg key="icon" className="icon" aria-hidden="true" style={{ cursor: 'pointer' }}
                onClick={(e) => { if (onClick) onClick(e) }}>
      <use xlinkHref={`${featherIcons}${iconName}`}/>
    </svg>
  } else {
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
