import ButtonStyle from "./styled";

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}> {children}</ButtonStyle>;
};

export default Button;
