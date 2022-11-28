import Image from 'next/image';
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


export default function LayoutBolao() {
  return (
    <main className="max-w-[1310px] h-full mt-2 mx-auto bg-black text-white">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl">Fase de Grupos</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop A</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={catar} alt="Bandeira do Catar" />
                  <span className="font-bold text-xl">Catar</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={senegal} alt="Bandeira do Senegal" />
                  <span className="font-bold text-xl">Senegal</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={equador} alt="Bandeira do Equador" />
                  <span className="font-bold text-xl">Equador</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={holanda} alt="Bandeira do holanda" />
                  <span className="font-bold text-xl">Holanda</span>
                </div>
                <button 
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Clique e escolha 
                </button>
            </div>
          </div>
          
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop B</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={inglaterra} alt="Bandeira do Inglaterra" />
                  <span className="font-bold text-xl">Inglaterra</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={ira} alt="Bandeira do Irã" />
                  <span className="font-bold text-xl">Irã</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={usa} alt="Bandeira do Estados Unidos" />
                  <span className="font-bold text-xl">Estados Unidos</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={gales} alt="Bandeira do Gales" />
                  <span className="font-bold text-xl">País de Gales</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop C</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={polonia} alt="Bandeira do Polônia" />
                  <span className="font-bold text-xl">Polônia</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={argentina} alt="Bandeira do Argentina" />
                  <span className="font-bold text-xl">Argentina</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={mexico} alt="Bandeira do México" />
                  <span className="font-bold text-xl">México</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={arabia} alt="Bandeira do Arábia Saudita" />
                  <span className="font-bold text-xl">Arábia Saudita</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop D</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={franca} alt="Bandeira do Catar" />
                  <span className="font-bold text-xl">Catar</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={dinamarca} alt="Bandeira do Dinamarca" />
                  <span className="font-bold text-xl">Dinamarca</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={australia} alt="Bandeira do Austrália" />
                  <span className="font-bold text-xl">Austrália</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={tunisia} alt="Bandeira do Tunísia" />
                  <span className="font-bold text-xl">Tunísia</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>

        </section>
        <section className="w-full flex max-md:flex-col">
        <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop E</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={japao} alt="Bandeira do Japão" />
                  <span className="font-bold text-xl">Japão</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={costaRica} alt="Bandeira do Costa Rica" />
                  <span className="font-bold text-xl">Costa Rica</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={alemanha} alt="Bandeira do Alemanha" />
                  <span className="font-bold text-xl">Alemanha</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={espanha} alt="Bandeira do Espanha" />
                  <span className="font-bold text-xl">Espanha</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>
          
          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop F</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={belgica} alt="Bandeira do Bélgica" />
                  <span className="font-bold text-xl">Bélgica</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={croacia} alt="Bandeira do Croacia" />
                  <span className="font-bold text-xl">Croacia</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={canada} alt="Bandeira do Canadá" />
                  <span className="font-bold text-xl">Canadá</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={marrocos} alt="Bandeira do Marrocos" />
                  <span className="font-bold text-xl">Marrocos</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop G</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={brasil} alt="Bandeira do Brasil" />
                  <span className="font-bold text-xl">Brasil</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={suica} alt="Bandeira do Suiça" />
                  <span className="font-bold text-xl">Suiça</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={servia} alt="Bandeira do Sérvia" />
                  <span className="font-bold text-xl">Sérvia</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={camaroes} alt="Bandeira do Camarões" />
                  <span className="font-bold text-xl">Camarões</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>

          <div className="w-3/12 flex max-md:w-full flex-col justify-center items-center">
            <h3>Gruop H</h3>
            <div className="w-11/12 flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
                
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={uruguai} alt="Bandeira do Uruguai" />
                  <span className="font-bold text-xl">Uruguai</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={gana} alt="Bandeira do Gana" />
                  <span className="font-bold text-xl">Gana</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={coreia} alt="Bandeira do Coreia do Sul" />
                  <span className="font-bold text-xl">Coreia do Sul</span>
                </div>
                <div className="mt-2 mb-2 flex items-center gap-4">
                  <Image src={portugal} alt="Bandeira do Portugal" />
                  <span className="font-bold text-xl">Portugal</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Clique e escolha 
                </button>
            </div>
          </div>
        </section>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Oitavas de Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section> 
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Quartas de Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-3/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Semifinal</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-6/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
          <div className="w-6/12 max-md:w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section>
      </div>


      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Disputa do 3º Lugar</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
          <span>Brasil</span> <span>X</span> <span>Argentina</span>
          </div>
        </section>
      </div>

    </main>
  )
}