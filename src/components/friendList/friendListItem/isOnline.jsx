import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const isOnline = ({ variant, isOnline, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOnline]: isOnline
        
      })}
    >
      {children}
    </p>
  );
};