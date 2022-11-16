import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/bolao-adolphera.jpeg'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen container mx-auto px-6 py-12 flex flex-col items-center justify-center">
      <Image src={logo} alt="Logo do site Bolão do Adolphera" />
      <p className="mt-4 text-gray-500 text-xl sm:text-2xl text-center">
        O Bolão do Adolphera chegou na hora certa, é hora de Copa do Mundo!
      </p>
      <div className="mt-8">
        {session?.user ? (
          <div className="text-lg flex flex-col space-y-1 bg-gray-200 rounded-lg px-6 py-3">
            <p>
              Seja bem vindo <strong>{session.user.email}!</strong>
            </p>
            <button
              onClick={() => signOut({
                callbackUrl: `${window.location.origin}`,
              })}
              className="font-semibold underline opacity-70 hover:opacity-100"
            >
              SAIR
            </button>
          </div>
        ) : (
          <Link href="/auth/signin" className="px-6 py-3 rounded-md text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition">
              Vamos palpitar?
          </Link>
        )}
      </div>
    </div>
  )
}
