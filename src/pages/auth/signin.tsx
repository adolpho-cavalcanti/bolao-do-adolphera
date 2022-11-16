import { MailOpenIcon } from '@heroicons/react/outline'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import logo from '../../assets/bolao-adolphera.jpeg'


const MagicLinkModal = ({ show = false, email = '' }) => {
  if (!show) return null

  return createPortal(
    <div className="fixed inset-0 z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md backdrop-grayscale">
      <div className="min-h-screen px-6 flex flex-col items-center justify-center animate-zoomIn">
        <div className="flex flex-col items-center justify-center text-center max-w-sm">
          <MailOpenIcon className="shrink-0 w-12 h-12 text-blue-500" />
          <h3 className="mt-2 text-2xl font-semibold">Confirme seu email</h3>
          <p className="mt-4 text-lg">
          Enviamos um link mágico para <strong>{email}</strong>. Verifique a sua
          caixa de entrada e clique no link no e-mail para fazer o login.
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSignIn = async e => {
    e.preventDefault()

    try {
      // Perform sign in
      const { error } = await signIn('email', {
        email,
        redirect: false,
        callbackUrl: `${window.location.origin}/auth/confirm-request`,
      })
      // Something went wrong
      if (error) {
        throw new Error(error)
      }
      setShowModal(true)
    } catch(error) {
      // handle error here (eg. display message to user)
    }
  }
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <Image src={logo} alt="Logo do site Bolão do Adolphera" />
        <p className="mt-2 text-2xl sm:text-4xl text-center font-bold">
          Faça login em sua conta
        </p>
        <form onSubmit={handleSignIn}
            className="mt-8 rounded-lg shadow-md bg-white px-4 py-6 sm:px-8 sm:py-8 space-y-6 w-full max-w-md">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-500 text-sm">
              Informe seu E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="pele-rei@gmail.com"
              className="py-2 px-4 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 focus:border-blue-400 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed "
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 transition"
          >
            Entrar
          </button>
        </form>
      </div>
      <MagicLinkModal show={showModal} email={email} />
    </>
  )
}

export default SignIn
