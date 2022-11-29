import { getProviders, getSession, signOut, useSession } from "next-auth/react";
import Login from "../components/Login/index";
import Palpite from "../components/Palpite";
import Profile from "../components/Profile";

export default function Home({ providers }) {
  const { data: session } = useSession();
  const user = session?.user;

  if (!session) return <Login providers={providers} />;

  return (
    <>
      <nav className="max-w-[1310px] flex justify-end items-center mt-8 p-12 mx-auto bg-gray-500 text-white">
        <Profile />
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          className="bg-red-500 rounded p-2 mx-4"
        >
          Sair
        </button>
        
      </nav>
      <Palpite />
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}