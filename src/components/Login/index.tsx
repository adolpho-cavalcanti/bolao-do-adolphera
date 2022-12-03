import Image from "next/image";
import iconCheck from '../../assets/icon-check.svg';

import argentina from '../../assets/bandeiras/icon-argentina.svg';
import australia from '../../assets/bandeiras/icon-australia.svg';
import belgica from '../../assets/bandeiras/icon-belgium.svg';
import brasil from '../../assets/bandeiras/icon-brazil.svg';
import camaroes from '../../assets/bandeiras/icon-cameroon.svg';
import canada from '../../assets/bandeiras/icon-canada.svg';
import costaRica from '../../assets/bandeiras/icon-costa_rica.svg';
import croacia from '../../assets/bandeiras/icon-croatia.svg';
import dinamarca from '../../assets/bandeiras/icon-denmark.svg';
import equador from '../../assets/bandeiras/icon-ecuador.svg';
import inglaterra from '../../assets/bandeiras/icon-england.svg';
import franca from '../../assets/bandeiras/icon-france.svg';
import alemanha from '../../assets/bandeiras/icon-germany.svg';
import gana from '../../assets/bandeiras/icon-ghana.svg';
import ira from '../../assets/bandeiras/icon-iran.svg';
import japao from '../../assets/bandeiras/icon-japan.svg';
import mexico from '../../assets/bandeiras/icon-mexico.svg';
import marrocos from '../../assets/bandeiras/icon-morocco.svg';
import holanda from '../../assets/bandeiras/icon-netherlands.svg';
import polonia from '../../assets/bandeiras/icon-poland.svg';
import portugal from '../../assets/bandeiras/icon-portugal.svg';
import catar from '../../assets/bandeiras/icon-qatar.svg';
import arabia from '../../assets/bandeiras/icon-saudi_arabia.svg';
import senegal from '../../assets/bandeiras/icon-senegal.svg';
import servia from '../../assets/bandeiras/icon-serbia.svg';
import coreia from '../../assets/bandeiras/icon-south_korea.svg';
import espanha from '../../assets/bandeiras/icon-spain.svg';
import suica from '../../assets/bandeiras/icon-switzerland.svg';
import tunisia from '../../assets/bandeiras/icon-tunisia.svg';
import usa from '../../assets/bandeiras/icon-united_states.svg';
import uruguai from '../../assets/bandeiras/icon-uruguay.svg';
import gales from '../../assets/bandeiras/icon-wales.svg';

import { signIn } from "next-auth/react";
import logoGmail from '../../assets/gmail-logo.png';
import logoSite from '../../assets/logo-adolpho.png';


const Login = ({ providers }) => {
  return (
    <main className="max-w-[1310px] h-full mb-16 mt-2 mx-auto bg-black text-white">

      <nav className="max-w-[1310px] flex max-md:flex-col max-md:gap-4 justify-between items-center my-8 p-12 mx-auto bg-black border-b border-blue-300 text-white">
        <Image src={logoSite} alt="Logo do site bolão do adolphera" />
        <div className="flex items-center gap-6">
          <Image src={iconCheck} alt="" />
          <div className="flex flex-col">
            <span><strong className="text-xl">R$5 </strong> Dê o seu palpite e acompanhe os palpites dos seus adiversários</span>
          </div>
        </div>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button 
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-500 px-6 py-4 flex gap-2 items-center rounded text-white font-bold text-sm uppercase hover:bg-red-600"
            >
              <span> Entrar   </span>
              <Image src={logoGmail} alt="logo Gmail" width={20} />
            </button>
          </div>
        ))}
        
      </nav>

      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl my-8">Classificação Final Fase de Grupos</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop A</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={holanda} alt="Bandeira do holanda" />
                <span className="font-bold text-xl">1º Holanda</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-2">
                  <Image src={senegal} alt="Bandeira do Senegal" />
                  <span className="font-bold text-xl">2º Senegal</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={equador} alt="Bandeira do Equador" />
                <span className="font-bold text-xl">3º Equador</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={catar} alt="Bandeira do Catar" />
                <span className="font-bold text-xl">4º Catar</span>
              </div>
                
            </div>
          </div>
          
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop B</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={inglaterra} alt="Bandeira do Inglaterra" />
                <span className="font-bold text-xl">1º Inglaterra</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={usa} alt="Bandeira do Estados Unidos" />
                <span className="font-bold text-xl">2º Estados Unidos</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={ira} alt="Bandeira do Irã" />
                <span className="font-bold text-xl">3º Irã</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={gales} alt="Bandeira do Gales" />
                <span className="font-bold text-xl">4º País de Gales</span>
              </div>

            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop C</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={argentina} alt="Bandeira do Argentina" />
                <span className="font-bold text-xl">1º Argentina</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={polonia} alt="Bandeira do Polônia" />
                <span className="font-bold text-xl">2º Polônia</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={mexico} alt="Bandeira do México" />
                <span className="font-bold text-xl">3º México</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={arabia} alt="Bandeira do Arábia Saudita" />
                <span className="font-bold text-xl">4º Arábia Saudita</span>
              </div>
              
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop D</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={franca} alt="Bandeira do França" />
                  <span className="font-bold text-xl">1º França</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={australia} alt="Bandeira do Austrália" />
                  <span className="font-bold text-xl">2º Austrália</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={tunisia} alt="Bandeira do Tunísia" />
                  <span className="font-bold text-xl">3º Tunísia</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={dinamarca} alt="Bandeira do Dinamarca" />
                  <span className="font-bold text-xl">4º Dinamarca</span>
                </div>

            </div>
          </div>

        </section>
        <section className="w-full flex max-md:flex-col">
        <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop E</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={japao} alt="Bandeira do Japão" />
                <span className="font-bold text-xl">1º Japão</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={espanha} alt="Bandeira do Espanha" />
                <span className="font-bold text-xl">2º Espanha</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={alemanha} alt="Bandeira do Alemanha" />
                <span className="font-bold text-xl">3º Alemanha</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={costaRica} alt="Bandeira do Costa Rica" />
                <span className="font-bold text-xl">4º Costa Rica</span>
              </div>
                
            </div>
          </div>
          
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop F</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={marrocos} alt="Bandeira do Marrocos" />
                  <span className="font-bold text-xl">1º Marrocos</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={croacia} alt="Bandeira do Croacia" />
                  <span className="font-bold text-xl">2º Croacia</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={belgica} alt="Bandeira do Bélgica" />
                  <span className="font-bold text-xl">3º Bélgica</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={canada} alt="Bandeira do Canadá" />
                  <span className="font-bold text-xl">4º Canadá</span>
                </div>
                
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop G</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={brasil} alt="Bandeira do Brasil" />
                <span className="font-bold text-xl">1º Brasil</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={suica} alt="Bandeira do Suiça" />
                <span className="font-bold text-xl">2º Suiça</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={camaroes} alt="Bandeira do Camarões" />
                <span className="font-bold text-xl">3º Camarões</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={servia} alt="Bandeira do Sérvia" />
                <span className="font-bold text-xl">4º Sérvia</span>
              </div>

            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop H</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={portugal} alt="Bandeira do Portugal" />
                <span className="font-bold text-xl">1º Portugal</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={coreia} alt="Bandeira do Coreia do Sul" />
                <span className="font-bold text-xl">2º Coreia do Sul</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={uruguai} alt="Bandeira do Uruguai" />
                <span className="font-bold text-xl">3º Uruguai</span>
              </div>
              <div className="mt-2 mb-2 flex items-center gap-4">
                <Image src={gana} alt="Bandeira do Gana" />
                <span className="font-bold text-xl">4º Gana</span>
              </div>
                
            </div>
          </div>
        </section>
      </div>

    </main>
          
  );
};

export default Login;