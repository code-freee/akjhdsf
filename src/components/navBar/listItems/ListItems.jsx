import "../navBar.scss";

const ListItems = ({ name, className }) => {
  return <li className={className}>{name}</li>;
};

export default ListItems;
