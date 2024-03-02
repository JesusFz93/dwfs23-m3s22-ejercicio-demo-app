import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="row">
      <article className="col">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </article>
    </section>
  );
};

export default ProfilePage;
