import { getSession, signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import logoSite from '../assets/logo-adolpho.png';
import Profile from '../components/Profile';
import { getPalpitesUsers } from "../lib/palpiteUser";

interface IUser {
  champion: string;
  second: string;
  third: string;
  fourth: string;
  name: string;
}

export default function TodasAsApostas ({ allUsersPalpites, PalpiteFoiFeito }) {
  const { data: session } = useSession();

  const users = allUsersPalpites.map((user: IUser) => {
    return user;
  })
  console.log(users, 'const aaaa = allUsersPalpites');
  console.log(allUsersPalpites, 'allUsersPalpites');

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
            signOut({
              callbackUrl: `${window.location.origin}`
            });
          }}
          className="bg-red-500 rounded p-2 mx-4"
        >
          Sair
        </button>
      }
      
        
    </nav>
    <main className="max-w-[1310px] h-full mt-2 mx-auto bg-black text-white">
      
      <div className="w-full flex flex-col justify-center items-center mt-7 p-6">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-4 border-b-2 border-solid">Todos os palpites</h2>
        </div>

        {PalpiteFoiFeito 
        ?
          <div className="w-full border-b-2 border-solid bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2">
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">Apostador</th>
                      <th scope="col" className="py-3 px-6">Campeão</th>
                      <th scope="col" className="py-3 px-6">Vice</th>
                      <th scope="col" className="py-3 px-6">3º Lugar</th>
                      <th scope="col" className="py-3 px-6">4º Lugar</th>
                    </tr>
                </thead>
                <tbody>
                  {allUsersPalpites.map((user) => (
                    <tr className="bg-gray border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white" key={user.email}>{user.name}</td>
                      <td scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white">{user.champion}</td>
                      <td scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white">{user.second}</td>
                      <td scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white">{user.third}</td>
                      <td scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white">{user.fourth}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
        :
          <div className="w-full border-b-2 border-solid bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2">
            <h2>Você não pode visiualizar as apostas sem antes fazer a sua</h2>
          </div>
        }
    </div>

  </main>
  </>
  )
}

export async function getServerSideProps(context) {
  const allUsersPalpites = await getPalpitesUsers();

  const session = await getSession(context);
  const user = session?.user;

  const verifyEmailExists = allUsersPalpites.filter(allUsersPalpite => (allUsersPalpite.email == user?.email));
  const PalpiteFoiFeito = verifyEmailExists.length > 0 ? true : false;

  const data = allUsersPalpites.map(allUsersPalpite => {
    return {
      champion: allUsersPalpite.champion,
      second: allUsersPalpite.second,
      third: allUsersPalpite.Third,
      fourth: allUsersPalpite.Fouth,
      name: allUsersPalpite.name,
      email: allUsersPalpite.email
    }
  });

  return {
    props: {
      allUsersPalpites: data,
      PalpiteFoiFeito
    },
  };
}