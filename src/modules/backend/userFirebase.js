import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const logInWithEmailAndPassword = async (email, password, callback) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      if (auth.currentUser !== null) callback();
    });
  } catch (err) {
    alert(err.message);
  }
};

const register = async (email, password, callback) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(()=>{
      logInWithEmailAndPassword(email, password, callback);
    });
  } catch (err) {
    alert(err.message);
  }
};

export { logInWithEmailAndPassword, register };
