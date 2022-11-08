import "./catelogcard.scss";

const CatilogCard = ({ image, name, handleGender }) => {
  return (
    <div
      className="catelogCard"
      onClick={() => {
        handleGender(name);
      }}
    >
      <img src={image} alt="" />
      <div className="shopnow">
        <h1>{name}</h1>
        <h4>Shop Now</h4>
      </div>
    </div>
  );
};
export default CatilogCard;
