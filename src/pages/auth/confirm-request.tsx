import { CheckCircleIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '../../assets/bolao-adolphera.jpeg'

const ConfirmRequest = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push('/auth/signin')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 max-w-md mx-auto">
      {loading ? (
        <p>Carregando...</p>
      ) : !session ? (
        <p>Redirecionando...</p>
      ) : (
        <>
          <Image src={logo} alt="Logo do site Bolão do Adolphera" />
          <CheckCircleIcon className="w-14 h-14 sm:w-16 sm:h-16 text-blue-600 shrink-0" />
          <h1 className="text-2xl sm:text-4xl font-bold mt-4">
            Você está dentro do jogo!
          </h1>
          <p className="text-lg sm:text-2xl mt-4">
            Volte para a página principal e seja o Rei do Bolão.
          </p>
          <p className="text-normal sm:text-lg text-gray-500 mt-6">
            Você pode fechar esta janela ou clicar{' '}
            <Link href="/" className="text-blue-500 hover:underline hover:text-blue-600">
                neste link
            </Link>{' '}
            para ir até a página principal
          </p>
        </>
      )}
    </div>
  )
}

export default ConfirmRequest
