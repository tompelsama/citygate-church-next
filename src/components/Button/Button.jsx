import clsx from "clsx";

import "./Button.scss"

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "contact-btn",
        containerClass
      )}
    >
      {leftIcon}

      <span className="contact-btn__inside">
        <div className="contact-btn__inside__top">
          {title}
        </div>
        <div className="contact-btn__inside__bot">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
