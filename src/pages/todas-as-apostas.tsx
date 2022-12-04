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

export default function TodasAsApostas ({ allUsersPalpites }) {
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

        <div className="w-full min-h-screen bg-black py-5">
          <div className='overflow-x-auto w-full'>
              <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                  <thead className="bg-gray-900">
                      <tr className="text-white text-left">
                          <th className="font-semibold text-sm uppercase px-6 py-4"> Nome </th>
                          <th className="font-semibold text-sm uppercase px-6 py-4"> Campeão </th>
                          <th className="font-semibold text-sm uppercase px-6 py-4"> Vice </th>
                          <th className="font-semibold text-sm uppercase px-6 py-4"> 3º Lugar </th>
                          <th className="font-semibold text-sm uppercase px-6 py-4"> 4º Lugar </th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {allUsersPalpites.map((user) => (
                      <tr>
                          <td className="px-6 py-4" key={user.email}>
                              <div className="flex items-center space-x-3">
                                  <div>
                                      <p className="text-gray-500 text-sm font-semibold tracking-wide"> {user.name} </p>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                  <div>
                                      <p className="text-gray-500 text-sm font-semibold tracking-wide"> {user.champion} </p>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                  <div>
                                      <p className="text-gray-500 text-sm font-semibold tracking-wide"> {user.second} </p>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                  <div>
                                      <p className="text-gray-500 text-sm font-semibold tracking-wide"> {user.third} </p>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                  <div>
                                      <p className="text-gray-500 text-sm font-semibold tracking-wide"> {user.fourth} </p>
                                  </div>
                              </div>
                          </td>
                      </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>

  </main>
  </>
  )
}

export async function getServerSideProps(context) {
  const allUsersPalpites = await getPalpitesUsers();

  const session = await getSession(context);
  const user = session?.user;

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
      allUsersPalpites: data
    },
  };
}