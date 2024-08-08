import style from "./style.module.css";
import css from "classnames";
import React, { ReactNode } from "react";

interface AlertProps {
  type: 'error' | 'success' | 'warning' | 'info' | 'primary' | 'secondary';
  message?: string; // Optional message prop
  children?: ReactNode; // Optional children prop
  icon?: ReactNode; // Optional icon prop
}

export default function Alert({ type, message, children, icon }: AlertProps) {
  const [isShow, setIsShow] = React.useState(true);

  const renderElAlert = () => {
    return React.cloneElement(children as React.ReactElement);
  };

  const handleClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      {icon && (
        <span className={style.icon}>
          {icon}
        </span>
      )}
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
