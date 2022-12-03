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
    <div className="flex flex-col">
      <ul className="flex flex-col gap-4 my-2 text-white px-2 py-2">
        <li>{user?.name}</li>
      </ul>
    </div>
  );
};

export default Profile;