import { useSession } from "next-auth/react";
import styles from "../../styles/Login.module.css";

const BolaoPage = () => {

  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className={styles.main}>
      <ul>
        <li>Nome: {user.name}</li>
        <li>Nome: {user.email}</li>
      </ul>
    </div>
  );
};

export default BolaoPage;