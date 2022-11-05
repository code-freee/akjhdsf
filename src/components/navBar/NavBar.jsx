import "./navBar.scss";
import owlLogo from "../../assets/logo/owl-street-logo.png";
import ListItems from "./listItems/ListItems";

const ListItemsData = [
  {
    id: 1,
    name: "Store",
  },
  {
    id: 2,
    name: "Catelog",
  },
  {
    id: 3,
    name: "Feedback",
  },
  {
    id: 1,
    name: "Contact Us",
  },
];

const NavBar = ({ imgReq }) => {
  return (
    <div className="navBar">
      <div className="logoStyle">
        {{ imgReq } ? <img src={owlLogo} alt="" /> : ""}
        <span>OwlStreet</span>
      </div>
      <div className="emptyDiv"></div>
      <div className="listItemsDiv">
        <ul className="listItems">
          {ListItemsData.map((item) => {
            return (
              <ListItems
                className={"listItemsStyle"}
                key={item.id}
                name={item.name}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
