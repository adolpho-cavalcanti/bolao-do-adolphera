import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import logoSite from '../assets/logo-adolpho.png';
import Profile from '../components/Profile';


export default function regras() {
  return (
    <>
      <nav className="max-w-[1310px] flex max-md:flex-col max-md:gap-4 justify-between items-center my-8 p-12 mx-auto bg-black border-b border-blue-300 text-white">
        <Image src={logoSite} alt="Logo do site bolão do adolphera" />
        <div className="flex items-center gap-6">
          <Link className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="/">Home</Link>
          <Link className="text-white px-4 py-2 border-solid border-blue-300 border-2 hover:bg-blue-300 hover:text-gray-900 rounded" href="/regras">Regras</Link>
        </div>
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
      <main className="max-w-[1310px] h-full mt-2 mx-auto bg-black text-white">
        
        <div className="w-full flex flex-col justify-center items-center mt-7 p-6">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-4 border-b-2 border-solid">ATENÇÃO</h2>
            <p className="mb-4 px-4">As apostas estão liberadas até às <strong className="text-blue-300">11:00 da manhã </strong> do dia <strong className="text-blue-300">04/12/2022</strong></p>
            <p className="mb-4 px-4">Fique esperto na hora de finalizar seu palpite, pois até o horário limite já terá ocorrido os 2 primeiros jogos das Oitavas de final. Sendo assim <strong className="text-blue-300">TODOS</strong> estarão em igualdade de condição para realizar seu palpite.</p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-4 border-b-2 border-solid">Premiação</h2>
            <p className="mb-4 px-4">A premiação será dividida assim:</p>
          </div>
          <ul className="w-full flex flex-col gap-4 border-b-2 border-solid bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2">
            <li>- Quem ficar em primeiro no ranking levará <strong className="text-blue-300">70%</strong> do valor arrecadado</li>
            <li>- Quem ficar em segundo no ranking levará <strong className="text-blue-300">20%</strong> do valor arrecadado</li>
            <li>- Quem ficar em terceiro no ranking levará <strong className="text-blue-300">10%</strong> do valor arrecadado</li>
            <li>- <strong className="text-blue-300">OBSERVAÇÃO: </strong> Se houver empate em todos os critérios para o primeiro lugar, o prêmio será dividido entre os vencedores e assim não teremos premiação para os demais</li>
          </ul>

          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-4 border-b-2 border-solid">Critérios de desempate</h2>
            <p className="mb-4 px-4">Será respeitado como critério de desempate a seguinte ordem:</p>
          </div>
          <ul className="w-full flex flex-col gap-4 border-b-2 border-solid bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2">
            <li>- Quem acertou o campeão</li>
            <li>- Persistindo o empate, quem acertou o vice-campeão</li>
            <li>- Persistindo o empate, quem acertou o 3º colocado</li>
            <li>- Persistindo o empate, quem acertou o 4º colocado</li>
            <li>- Persistindo o empate, o prêmio total será dividido entre os palpiteiros campeões</li>
          </ul>

          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-4 border-b-2 border-solid">Vamos as REGRAS de pontuação</h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center border-b-2 border-solid bg-gray-700 rounded p-6 px-4 mt-2 mb-2 ">
            <p className="my-4 py-4">
              Você selecionará o vencedor de cada jogo clicando na bandeira do país e com isso essa seleção vai passando de fase 
              até chegar no momento de escolher quem serão os 4 primeiros desta Copa.
            </p>
            <p className="mb-4 py-4">
              Para cada seleção que você acertar que ficará entre as 4 primeiras você ganha 10 pontos e se você cravar a colocação de cada 
              um dos 4 primeiros colocados você também ganhará mais pontos que serão acumulados para chegarmos no grande vencedor do bolão.
            </p>
            <p className="mb-4 py-4">
              A pontuação correta para cada acerto é a seguinte:
            </p>
          </div>
          <ul className="w-full flex flex-col gap-4 border-b-2 border-solid bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2">
            <li>- Acertou quem vai ser a seleção campeã ganha <strong className="text-blue-300">50</strong> pontos</li>
            <li>- Acertou quem vai ser o vice campeão ganha <strong className="text-blue-300">30</strong> pontos</li>
            <li>- Acertou quem vai ficar na 3ª colocação <strong className="text-blue-300">20</strong> pontos</li>
            <li>- Acertou quem vai ficar em 4ª lugar <strong className="text-blue-300">15</strong> pontos</li>
            <li>- Acertou que a seleção ficaria entre as 4 primeiras, mas não acertou a posição correta ganha <strong className="text-blue-300">10</strong> pontos por seleção</li>
          </ul>
          <div className="w-full flex flex-col  border-b-2 border-solid bg-gray-700 rounded mt-6 mb-10 mx-2">
            <h2 className="text-2xl mb-4 border-b-2 border-solid">Veja como fazer seu palpite</h2>
            <iframe className="w-full h-96" src="https://www.youtube.com/embed/Q1Vd7oKPFqA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="w-full flex flex-col justify-center items-center border-b-2 border-solid bg-gray-700 rounded mt-6 mb-10 mx-2">
            <h3 className="text-2xl"><strong className="text-blue-300">Dúvidas?</strong></h3>
            <p className="mb-4 py-4">Chama no Zap do Adolphera</p>
          </div>

        </div>

    </main>
    </>
  )
}