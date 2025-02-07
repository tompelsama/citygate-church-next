import clsx from "clsx";

import "./Button.scss"

const Button = ({ id, title, rightIcon, leftIcon, containerClass, url, target = "_self" }) => {
  return (
    <a
      href={url}
      id={id}
      className={clsx(
        "contact-btn",
        containerClass
      )}
      target={target}
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
    </a>
  );
};

export default Button;
