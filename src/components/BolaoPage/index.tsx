import { useSession } from "next-auth/react";
import styles from "../../styles/Login.module.css";

interface Iuser {
  name?: string;
  email?: string;
  image?: string;
  uid?: string;
}

const BolaoPage = () => {
  const { data: session } = useSession();
  const user: Iuser = session?.user;
  return (
    <div className={styles.main}>
      <ul>
        <li>Nome: {user?.name}</li>
        <li>Email: {user?.email}</li>
        <li>uid: {user?.uid}</li>
      </ul>
    </div>
  );
};

export default BolaoPage;