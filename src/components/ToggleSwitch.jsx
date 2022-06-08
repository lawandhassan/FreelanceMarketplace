import "../styles/toggleswitch.css";
import { updateDoc, doc } from "firebase/firestore";
import { useAuth } from "../context";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { notifyProfileUpdate } from "../helper-functions";

function ToggleSwitch() {
  const [collabToggle, setCollabToggle] = useState(false);
  const {
    currentUser: { uid, isOpenForCollab },
    getUser,
    setCurrentUser,
  } = useAuth();
  const docRef = doc(db, "users", uid);

  const toggleHandler = async (notifyError) => {
    try {
      await updateDoc(docRef, {
        isOpenForCollab: collabToggle,
      });
      await getUser(uid, setCurrentUser);
    } catch (error) {
      console.log(error);
      notifyError();
    }
  };

  useEffect(
    () => {
      toggleHandler();
    },
    // eslint-disable-next-line
    [collabToggle]
  );

  return (
    <div  className="toggle-switch flex gap-4 items-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOpenForCollab}
          onChange={() => {
            setCollabToggle((collabToggle) => !collabToggle);
            notifyProfileUpdate();
          }}
        />
        <span className="slider round"></span>
      </label>
      <label className="font-medium">Open for Collaborations</label>
    </div>
  );
}

export { ToggleSwitch };
