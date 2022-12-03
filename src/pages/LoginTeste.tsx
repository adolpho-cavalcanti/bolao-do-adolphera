import { getProviders, getSession, signIn, useSession } from 'next-auth/react';


export default function LoginTeste({ providers }) {

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button 
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-500 px-6 py-4 flex gap-2 items-center rounded text-white font-bold text-sm uppercase hover:bg-red-600"
            >
              <span> Entrar   </span>
              {/* <Image src={logoGmail} alt="logo Gmail" width={20} /> */}
            </button>
          </div>
        ))}
    </>
  )
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