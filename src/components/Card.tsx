interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className={"p-10 rounded-md shadow-md bg-white"}>{children}</div>
);

export default Card;
