import { getProviders, getSession, signOut, useSession } from "next-auth/react";
import Login from "../components/Login/index";
import Palpite from "../components/Palpite";
import Profile from "../components/Profile";
import { getPalpitesUsers } from "../lib/palpiteUser";

import axios from "axios";
import { useEffect } from "react";

export default function Home({ providers, allUsersPalpites, PalpiteFoiFeito }) {
  const { data: session } = useSession();
  const user = session?.user;

  if (!session) return <Login providers={providers} />;

  const getPalpites = async() => {
    await axios.get('http://localhost:3000/api/palpites')
      .then(({data}) => {
        console.log('data' , data);
    });
  }


  useEffect(() => {
    getPalpites();
  }, []);

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
      
      <hr></hr>
          {PalpiteFoiFeito 
            ?
            <div className="w-full flex flex-col justify-center items-center mt-7">
              <h2 className="text-2xl">Você já fez o seu palpite, em breve você poderá acompanhar o andamento da sua aposta</h2>
              <section className="w-full flex max-md:flex-col">
                <div className="w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">

                </div>
              </section>
            </div>
            :
            <Palpite />
          }
    </>
  );
}

export async function getServerSideProps(context) {
  const allUsersPalpites = await getPalpitesUsers();

  const providers = await getProviders();
  const session = await getSession(context);

  const user = session?.user;
  
  const verifyEmailExists = allUsersPalpites.filter(allUsersPalpite => (allUsersPalpite.email == user?.email));
  const PalpiteFoiFeito = verifyEmailExists.length > 0 ? true : false;

  const data = allUsersPalpites.map(allUsersPalpite => {
    return {
      second: allUsersPalpite.second,
      champion: allUsersPalpite.champion,
      email: allUsersPalpite.email
    }
  });

  return {
    props: {
      providers,
      session,
      allUsersPalpites: data,
      PalpiteFoiFeito
    },
  };
}