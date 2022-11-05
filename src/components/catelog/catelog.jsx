import "./catelog.scss";
import man from "../../assets/catelogimages/men.jpg";
import women from "../../assets/catelogimages/women1.jpg";
import GenderCatelog from "./genderCatelog/GenderCatelog";

const genderCatelog = [
  {
    id: 1,
    name: "Men",
    image: man,
  },
  {
    id: 2,
    name: "Women",
    image: women,
  },
];

const Catelog = () => {
  return (
    <div className="catelogContainer">
      {genderCatelog.map((item) => {
        return (
          <GenderCatelog key={item.id} name={item.name} image={item.image} />
        );
      })}
    </div>
  );
};

export default Catelog;
