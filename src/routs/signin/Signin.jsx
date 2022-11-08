import { signInWithGooglePopup } from "../../utils/firebase/FireBaseUtils";
import { createUserDocumentFromAuth } from "../../utils/firebase/FireBaseUtils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign-In</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default Signin;
