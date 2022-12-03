import { getProviders, getSession, signOut, useSession } from "next-auth/react";
import Login from "../components/Login/index";
import Palpite from "../components/Palpite";
import Profile from "../components/Profile";
import { getPalpitesUsers } from "../lib/palpiteUser";

import logoSite from '../assets/logo-adolpho.png';

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { prisma } from "../lib/prisma";

export default function Home({ providers, allUsersPalpites, PalpiteFoiFeito, userByEmailTransform }) {
  const { data: session } = useSession();
  const user = session?.user;

  if (!session) return <Login providers={providers} />;

  const getPalpites = async() => {
    await axios.get('https://www.bolaodoadolphera.com.br/api/palpites')
      .then(({data}) => {
        console.log('data' , data);
    });
  }


  useEffect(() => {
    getPalpites();
  }, []);

  return (
    <>

      <nav className="max-w-[1310px] flex max-md:flex-col max-md:gap-4 justify-between items-center my-8 p-12 mx-auto bg-black border-b border-blue-300 text-white">
        <Image src={logoSite} width={350} alt="Logo do site bolão do adolphera" />
        <div className="flex items-center gap-2">
          <Link className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="/">Home</Link>
          <Link className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="/regras">Regras</Link>
          <Link className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="/todas-as-apostas">Palpites</Link>
        </div>
        <Profile />
        {!session
          ?
          <></>
          :
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            className="bg-red-500 rounded p-2 mx-4"
          >
            Sair
          </button>
        }
      </nav>
      
      {PalpiteFoiFeito 
        ?
        <div className="w-full flex flex-col justify-center items-center mt-7">
          <h2 className="text-2xl">Sua pontuação no momento é <strong className="text-blue-300 px-2 border-blue-300 border-4 border-solid rounded-full">{userByEmailTransform?.score}</strong></h2>
          <section className="w-full flex max-md:flex-col">
            <div className="w-full flex flex-col justify-center items-center px-4 mt-2 mb-2 mx-2 max-md:mx-0">
              <span className="mt-8">Seu palpite</span>
              <ul className="py-8 flex justify-center items-center gap-4">
                <li>
                  1º { userByEmailTransform?.champion && 
                    <span>
                      <strong className="text-blue-300 px-2 border-blue-300 border-4 border-solid rounded-full">{userByEmailTransform?.champion}</strong>
                    </span>}
                </li>
                <li>
                  2º { userByEmailTransform?.second && 
                    <span>
                      <strong className="text-blue-300 px-2 border-blue-300 border-4 border-solid rounded-full">{userByEmailTransform?.second}</strong>
                    </span>}
                </li>
                <li>
                  3º { userByEmailTransform?.Third && 
                    <span>
                      <strong className="text-blue-300 px-2 border-blue-300 border-4 border-solid rounded-full">{userByEmailTransform?.Third}</strong>
                    </span>}
                </li>
                <li>
                  4º { userByEmailTransform?.Fouth && 
                    <span>
                      <strong className="text-blue-300 px-2 border-blue-300 border-4 border-solid rounded-full">{userByEmailTransform?.Fouth}</strong>
                    </span>}
                </li>
              </ul>
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

  const userByEmail = await prisma.user.findFirst({
    where: {
      email: user?.email
    },
  });

  const userByEmailTransform = {
    name: userByEmail?.name || null,
    score: userByEmail?.score || 0,
    champion: userByEmail?.champion || null,
    second: userByEmail?.second || null,
    Third: userByEmail?.Third || null,
    Fouth: userByEmail?.Fouth || null
  }

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
      PalpiteFoiFeito,
      userByEmailTransform
    },
  };
}