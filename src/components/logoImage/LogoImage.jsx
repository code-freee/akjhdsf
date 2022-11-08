import image from "../../assets/logo/owl-street-logo.png";

const LogoImage = ({ name }) => {
  return (
    <>
      <div className="logoImg">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
    </>
  );
};

export default LogoImage;
