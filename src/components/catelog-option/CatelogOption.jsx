import "./catelogOption.scss";
import CatilogCard from "./catilog-card/CatilogCard";
import men from "../../assets/catelogimages/men.jpg";
import women from "../../assets/catelogimages/women1.jpg";
import { Link } from "react-router-dom";

const CatelogOption = ({ handleGender }) => {
  const options = [
    {
      id: 1,
      name: "Men",
      image: men,
    },
    {
      id: 2,
      name: "Women",
      image: women,
    },
  ];

  return (
    <div className="catelogOption">
      {options.map((gender) => {
        return (
          <Link key={gender.id} to={`/Product-List/${gender.name}`}>
            <CatilogCard
              name={gender.name}
              image={gender.image}
              handleGender={handleGender}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CatelogOption;
