import Image from "next/image";


interface IpalpiteUser {
  email: string;
  name: string;
  champion: string;
  second: string;
  Third: string;
  Fouth: string;
}

const ViewPalpite = ({ dataUserActual }) => {
  
  const {
    name,
    champion,
    second,
    Third,
    Fouth
  } = dataUserActual;
  
  return (
    <main className="max-w-[1310px] h-full mt-2 mx-auto bg-black text-white">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl">Acompanhe o seu palpite</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex max-md:w-full flex-col justify-center items-center">
            <h3>Agora é a hora de acompanhar sua pontuação!</h3>
            <div className="w-full flex flex-col justify-center bg-gray-700 rounded py-4 px-8">
              <span>Sua pontuação atual é:</span>
            </div>
          </div>
        </section>
      </div>


      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Classificação Final segundo o especialista "Bamo bamo": {name}</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <ul className="flex justify-center items-center gap-4">
              <li>
                1º { champion.image && <Image src={`/./icon-${champion.image}.svg`} alt="" height="50" width="50" /> }
              </li>
              <li>
                2º { second.image && <Image src={`/./icon-${second.image}.svg`} alt="" height="50" width="50" /> }
              </li>
              <li>
                3º { Third.image && <Image src={`/./icon-${Third.image}.svg`} alt="" height="50" width="50" /> }
              </li>
              <li>
                4º { Fouth.image && <Image src={`/./icon-${dataUserActual.Fouth.image}.svg`} alt="" height="50" width="50" /> }
              </li>
            </ul>
          </div>
        </section>
      </div>


    </main>
  );
};

export default ViewPalpite;