import React from 'react';
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";

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
  let mode = primary ? 'btn btn-primary' : 'btn btn-secondary';

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
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={(e) => { if (onClick) onClick(e) }}
      disabled={isDisabled ? isDisabled : false}
      {...props}
    >
      <div className="text-center" style={{display: 'flex', alignItems: 'center'}}>
        {children}
      </div>
    </button>
  }
};
