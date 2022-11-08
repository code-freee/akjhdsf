import "./homePage.scss";
import CatelogOption from "../../components/catelog-option/CatelogOption";

const HomePage = ({ handleGender }) => {
  return (
    <div className="homepage">
      <CatelogOption handleGender={handleGender} />
      <h4 className="quote">"Never Looked so Good"</h4>
    </div>
  );
};

export default HomePage;
