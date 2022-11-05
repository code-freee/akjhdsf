import "./genderCatelog.scss";
const catelogItems = [
  {
    id: 1,
    title: "Shirts",
    image: "",
  },
  {
    id: 2,
    title: "T - Shirts",
    image: "",
  },
  {
    id: 3,
    title: "Jeans",
    image: "",
  },
  {
    id: 4,
    title: "Accessories",
    image: "",
  },
  {
    id: 5,
    title: "Shoes",
    image: "",
  },
];

const GenderCatelog = ({ name, image }) => {
  return (
    <div className="genderCatelog">
      <img className="CatelogImage" src={image} alt="" />
      <div className="catelogGenderName">
        {name}
        <h4>Shop Now</h4>
      </div>
    </div>
  );
};

export default GenderCatelog;
