import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "regular" | "outline";
  size?:"large"| "medium" | "small";
  children: React.ReactNode;
}

const Button = ({
  variant = "regular",
  size = "large",
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
