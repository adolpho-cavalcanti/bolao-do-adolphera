import { useSession } from "next-auth/react";

interface Iuser {
  name?: string;
  email?: string;
  image?: string;
  uid?: string;
}

const Profile = () => {
  const { data: session } = useSession();
  const user: Iuser = session?.user;
  return (
    
      <ul className="flex max-md:flex-col gap-4">
        <li>{user?.email}</li>
      </ul>
  );
};

export default Profile;