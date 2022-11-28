import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import Image from 'next/image';
import { useState } from "react";

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

const gropoa1 = [
  { value: "Catar", label: "Catar", image: "catar"},
  { value: "Equador", label: "Equador", image: "equador"},
  { value: "Holanda", label: "Holanda", image: "holanda"},
  { value: "Senegal", label: "Senegal", image: "senegal"}
];
const gropoa2 = [
  { value: "Catar", label: "Catar", image: "catar"},
  { value: "Equador", label: "Equador", image: "equador"},
  { value: "Holanda", label: "Holanda", image: "holanda"},
  { value: "Senegal", label: "Senegal", image: "senegal"}
];

const gropob1 = [
  { value: "Inglaterra", label: "Inglaterra", image: "inglaterra"},
  { value: "Irã", label: "Irã", image: "ira"},
  { value: "USA", label: "USA", image: "usa"},
  { value: "País de Gales", label: "País de Gales", image: "gales"}
];
const gropob2 = [
  { value: "Inglaterra", label: "Inglaterra", image: "inglaterra"},
  { value: "Irã", label: "Irã", image: "ira"},
  { value: "USA", label: "USA", image: "usa"},
  { value: "País de Gales", label: "País de Gales", image: "gales"}
];

const gropoc1 = [
  { value: "Argentina", label: "Argentina", image: "argentina"},
  { value: "México", label: "México", image: "mexico"},
  { value: "Polônia", label: "Polônia", image: "polonia"},
  { value: "Arábia Saudita", label: "Arábia Saudita", image: "arabiasaudita"}
];
const gropoc2 = [
  { value: "Argentina", label: "Argentina", image: "argentina"},
  { value: "México", label: "México", image: "mexico"},
  { value: "Polônia", label: "Polônia", image: "polonia"},
  { value: "Arábia Saudita", label: "Arábia Saudita", image: "arabiasaudita"}
];

const gropod1 = [
  { value: "Austrália", label: "Austrália", image: "australia"},
  { value: "Dinamarca", label: "Dinamarca", image: "dinamarca"},
  { value: "França", label: "França", image: "franca"},
  { value: "Tunísia", label: "Tunísia", image: "tunisia"}
];
const gropod2 = [
  { value: "Austrália", label: "Austrália", image: "australia"},
  { value: "Dinamarca", label: "Dinamarca", image: "dinamarca"},
  { value: "França", label: "França", image: "franca"},
  { value: "Tunísia", label: "Tunísia", image: "tunisia"}
];

const gropoe1 = [
  { value: "Costa Rica", label: "Costa Rica", image: "costarica"},
  { value: "Alemanha", label: "Alemanha", image: "alemanha"},
  { value: "Japão", label: "Japão", image: "japao"},
  { value: "Espanha", label: "Espanha", image: "espanha"}
];
const gropoe2 = [
  { value: "Costa Rica", label: "Costa Rica", image: "costarica"},
  { value: "Alemanha", label: "Alemanha", image: "alemanha"},
  { value: "Japão", label: "Japão", image: "japao"},
  { value: "Espanha", label: "Espanha", image: "espanha"}
];

const gropof1 = [
  { value: "Bélgica", label: "Bélgica", image: "belgica"},
  { value: "Canadá", label: "Canadá", image: "canada"},
  { value: "Croácia", label: "Croácia", image: "croacia"},
  { value: "Marrocos", label: "Marrocos", image: "marrocos"}
];
const gropof2 = [
  { value: "Bélgica", label: "Bélgica", image: "belgica"},
  { value: "Canadá", label: "Canadá", image: "canada"},
  { value: "Croácia", label: "Croácia", image: "croacia"},
  { value: "Marrocos", label: "Marrocos", image: "marrocos"}
];

const gropog1 = [
  { value: "Brasil", label: "Brasil", image: "brasil"},
  { value: "Camarões", label: "Camarões", image: "camaroes"},
  { value: "Sérvia", label: "Sérvia", image: "servia"},
  { value: "Suiça", label: "Suiça", image: "suica"}
];
const gropog2 = [
  { value: "Brasil", label: "Brasil", image: "brasil"},
  { value: "Camarões", label: "Camarões", image: "camaroes"},
  { value: "Sérvia", label: "Sérvia", image: "servia"},
  { value: "Suiça", label: "Suiça", image: "suica"}
];

const gropoh1 = [
  { value: "Portugal", label: "Portugal", image: "portugal"},
  { value: "Uruguai", label: "Uruguai", image: "uruguai"},
  { value: "Gana", label: "Gana", image: "gana"},
  { value: "Coreia do Sul", label: "Coreia do Sul", image: "coreia"}
];
const gropoh2 = [
  { value: "Portugal", label: "Portugal", image: "portugal"},
  { value: "Uruguai", label: "Uruguai", image: "uruguai"},
  { value: "Gana", label: "Gana", image: "gana"},
  { value: "Coreia do Sul", label: "Coreia do Sul", image: "coreia"}
];

export default function Palpites() {
  const [primaryA, setPrimaryA] = useState({
    value: "",
    image: ""
  });
  const [secondA, setSecondA] = useState({
    value: "",
    image: ""
  });
  const [nationsRestA, setNationsRestA] = useState(gropoa2);

  const [primaryB, setPrimaryB] = useState({
    value: "",
    image: ""
  });
  const [secondB, setSecondB] = useState({
    value: "",
    image: ""
  });
  const [nationsRestB, setNationsRestB] = useState(gropob2);

  const [primaryC, setPrimaryC] = useState({
    value: "",
    image: ""
  });
  const [secondC, setSecondC] = useState({
    value: "",
    image: ""
  });
  const [nationsRestC, setNationsRestC] = useState(gropoc2);

  const [primaryD, setPrimaryD] = useState({
    value: "",
    image: ""
  });
  const [secondD, setSecondD] = useState({
    value: "",
    image: ""
  });
  const [nationsRestD, setNationsRestD] = useState(gropod2);

  const [primaryE, setPrimaryE] = useState({
    value: "",
    image: ""
  });
  const [secondE, setSecondE] = useState({
    value: "",
    image: ""
  });
  const [nationsRestE, setNationsRestE] = useState(gropoe2);

  const [primaryF, setPrimaryF] = useState({
    value: "",
    image: ""
  });
  const [secondF, setSecondF] = useState({
    value: "",
    image: ""
  });
  const [nationsRestF, setNationsRestF] = useState(gropof2);

  const [primaryG, setPrimaryG] = useState({
    value: "",
    image: ""
  });
  const [secondG, setSecondG] = useState({
    value: "",
    image: ""
  });
  const [nationsRestG, setNationsRestG] = useState(gropog2);

  const [primaryH, setPrimaryH] = useState({
    value: "",
    image: ""
  });
  const [secondH, setSecondH] = useState({
    value: "",
    image: ""
  });
  const [nationsRestH, setNationsRestH] = useState(gropoh2);

  //QUARTAS
  const [qualificationQuartasJ1Home, setQualificationQuartasJ1Home] = useState({
      value: "",
      image: ""
  });
  const [
    qualificationQuartasJ1Visit,
    setQualificationQuartasJ1Visit
  ] = useState({
      value: "",
      image: ""
  });

  const [qualificationQuartasJ2Home, setQualificationQuartasJ2Home] = useState(
    {
      value: "",
      image: ""
  }
  );
  const [
    qualificationQuartasJ2Visit,
    setQualificationQuartasJ2Visit
  ] = useState({
      value: "",
      image: ""
  });

  const [qualificationQuartasJ3Home, setQualificationQuartasJ3Home] = useState(
    {
      value: "",
      image: ""
  }
  );
  const [
    qualificationQuartasJ3Visit,
    setQualificationQuartasJ3Visit
  ] = useState({
      value: "",
      image: ""
  });

  const [qualificationQuartasJ4Home, setQualificationQuartasJ4Home] = useState(
    {
      value: "",
      image: ""
  }
  );
  const [
    qualificationQuartasJ4Visit,
    setQualificationQuartasJ4Visit
  ] = useState({
      value: "",
      image: ""
  });

  const [qualificationSemi1,setQualificationSemi1] = useState({
    value: "",
    image: ""
  });
  const [qualificationSemi2,setQualificationSemi2] = useState({
    value: "",
    image: ""
  });
  const [qualificationSemi3,setQualificationSemi3] = useState({
    value: "",
    image: ""
  });
  const [qualificationSemi4,setQualificationSemi4] = useState({
    value: "",
    image: ""
  });
  
  const [qualificationThirdPosition1,setQualificationThirdPosition1] = useState({
    value: "",
    image: ""
  });
  const [qualificationThirdPosition2,setQualificationThirdPosition2] = useState({
    value: "",
    image: ""
  });
 
  const [qualificationFinal1,setQualificationFinal1] = useState({
    value: "",
    image: ""
  });
  const [qualificationFinal2,setQualificationFinal2] = useState({
    value: "",
    image: ""
  });

  const [fourPosition,setFourPosition] = useState({
    value: "",
    image: ""
  });
  const [thirdPosition,setThirdPosition] = useState({
    value: "",
    image: ""
  });
  const [vicePosition,setVicePosition] = useState({
    value: "",
    image: ""
  });
  const [ChampionPosition,setChampionPosition] = useState({
    value: "",
    image: ""
  });
  
  const handleChangeSelectedPrimaryA = (event) => {
    const nationsSelected1A = event.target.value;
    const nationsInSecondPositionA = gropoa2.filter(
      (opt) => opt.value !== nationsSelected1A
    );
    const imageSelecion = gropoa2.filter(
      (opt) => opt.value == nationsSelected1A
    );
    setPrimaryA({
      value: nationsSelected1A,
      image: imageSelecion[0].image
    });
    setNationsRestA(nationsInSecondPositionA);
  };
  const handleChangeSelectedSecondA = (event) => {
    const nationsSelected2A = event.target.value;
    const imageSelecion = gropoa2.filter(
      (opt) => opt.value == nationsSelected2A
    );
    setSecondA({
      value: nationsSelected2A,
      image: imageSelecion[0].image
    });
  };

  const handleChangeSelectedPrimaryB = (event) => {
    const nationsSelected1B = event.target.value;
    const nationsInSecondPositionB = gropob2.filter(
      (opt) => opt.value !== nationsSelected1B
    );
    
    const imageSelecion = gropob2.filter(
      (opt) => opt.value == nationsSelected1B
    );
    setPrimaryB({
      value: nationsSelected1B,
      image: imageSelecion[0].image
    });
    setNationsRestB(nationsInSecondPositionB);
  };

  const handleChangeSelectedSecondB = (event) => {
    const nationsSelected2B = event.target.value;
    const imageSelecion = gropob2.filter(
      (opt) => opt.value == nationsSelected2B
    );
    setSecondB({
      value: nationsSelected2B,
      image: imageSelecion[0].image
    });

  };
  
  const handleChangeSelectedPrimaryC = (event) => {
    const nationsSelected1C = event.target.value;
    const nationsInSecondPositionC = gropoc2.filter(
      (opt) => opt.value !== nationsSelected1C
    );

    const imageSelecion = gropoc2.filter(
      (opt) => opt.value == nationsSelected1C
    );
    setPrimaryC({
      value: nationsSelected1C,
      image: imageSelecion[0].image
    }); 
    setNationsRestC(nationsInSecondPositionC);
  };
  const handleChangeSelectedSecondC = (event) => {
    const nationsSelected2C = event.target.value;
    const imageSelecion = gropoc2.filter(
      (opt) => opt.value == nationsSelected2C
    );
    setSecondC({
      value: nationsSelected2C,
      image: imageSelecion[0].image
    });

  };

  const handleChangeSelectedPrimaryD = (event) => {
    const nationsSelected1D = event.target.value;
    const nationsInSecondPositionD = gropod2.filter(
      (opt) => opt.value !== nationsSelected1D
    );
    const imageSelecion = gropod2.filter(
      (opt) => opt.value == nationsSelected1D
    );
    setPrimaryD({
      value: nationsSelected1D,
      image: imageSelecion[0].image
    }); 
    setNationsRestD(nationsInSecondPositionD);
  };
  const handleChangeSelectedSecondD = (event) => {
    const nationsSelected2D = event.target.value;
    const imageSelecion = gropod2.filter(
      (opt) => opt.value == nationsSelected2D
    );
    setSecondD({
      value: nationsSelected2D,
      image: imageSelecion[0].image
    });

  };

  const handleChangeSelectedPrimaryE = (event) => {
    const nationsSelected1E = event.target.value;
    const nationsInSecondPositionE = gropoe2.filter(
      (opt) => opt.value !== nationsSelected1E
    );
    const imageSelecion = gropoe2.filter(
      (opt) => opt.value == nationsSelected1E
    );
    setPrimaryE({
      value: nationsSelected1E,
      image: imageSelecion[0].image
    }); 
    setNationsRestE(nationsInSecondPositionE);
  };
  const handleChangeSelectedSecondE = (event) => {
    const nationsSelected2E = event.target.value;
    const imageSelecion = gropoe2.filter(
      (opt) => opt.value == nationsSelected2E
    );
    setSecondE({
      value: nationsSelected2E,
      image: imageSelecion[0].image
    });

  };

  const handleChangeSelectedPrimaryF = (event) => {
    const nationsSelected1F = event.target.value;
    const nationsInSecondPositionF = gropof2.filter(
      (opt) => opt.value !== nationsSelected1F
    );
    const imageSelecion = gropof2.filter(
      (opt) => opt.value == nationsSelected1F
    );
    setPrimaryF({
      value: nationsSelected1F,
      image: imageSelecion[0].image
    }); 
    setNationsRestF(nationsInSecondPositionF);
  };
  const handleChangeSelectedSecondF = (event) => {
    const nationsSelected2F = event.target.value;
    const imageSelecion = gropof2.filter(
      (opt) => opt.value == nationsSelected2F
    );
    setSecondF({
      value: nationsSelected2F,
      image: imageSelecion[0].image
    });

  };

  const handleChangeSelectedPrimaryG = (event) => {
    const nationsSelected1G = event.target.value;
    const nationsInSecondPositionG = gropog2.filter(
      (opt) => opt.value !== nationsSelected1G
    );
    const imageSelecion = gropog2.filter(
      (opt) => opt.value == nationsSelected1G
    );
    setPrimaryG({
      value: nationsSelected1G,
      image: imageSelecion[0].image
    }); 
    setNationsRestG(nationsInSecondPositionG);
  };
  const handleChangeSelectedSecondG = (event) => {
    const nationsSelected2G = event.target.value;
    const imageSelecion = gropog2.filter(
      (opt) => opt.value == nationsSelected2G
    );
    setSecondG({
      value: nationsSelected2G,
      image: imageSelecion[0].image
    });

  };

  const handleChangeSelectedPrimaryH = (event) => {
    const nationsSelected1H = event.target.value;
    const nationsInSecondPositionH = gropoh2.filter(
      (opt) => opt.value !== nationsSelected1H
    );
    const imageSelecion = gropoh2.filter(
      (opt) => opt.value == nationsSelected1H
    );
    setPrimaryH({
      value: nationsSelected1H,
      image: imageSelecion[0].image
    }); 
    setNationsRestH(nationsInSecondPositionH);
  };
  const handleChangeSelectedSecondH = (event) => {
    const nationsSelected2H = event.target.value;
    const imageSelecion = gropoh2.filter(
      (opt) => opt.value == nationsSelected2H
    );
    setSecondH({
      value: nationsSelected2H,
      image: imageSelecion[0].image
    });

  };

  //Handle Quartas
  const handleOitavasJ1 = (quartasJ1Home) => {
    if (quartasJ1Home.value == primaryA.value) {
      setQualificationQuartasJ1Home({
        value: primaryA.value,
        image: primaryA.image
      });
    } else {
      setQualificationQuartasJ1Home({
          value: secondB.value,
          image: secondB.image
      });
    }
  };
  const handleOitavasJ5 = (quartasJ1Visit) => {
    if (quartasJ1Visit.value == primaryB.value) {
      setQualificationQuartasJ1Visit({
        value: primaryB.value,
        image: primaryB.image
      });
    } else {
      setQualificationQuartasJ1Visit({
        value: secondA.value,
        image: secondA.image
      });
    }
  };

  const handleOitavasJ2 = (quartasJ2Home) => {
    if (quartasJ2Home.value == primaryC.value) {
      setQualificationQuartasJ2Home({
        value: primaryC.value,
        image: primaryC.image
      });
    } else {
      setQualificationQuartasJ2Home({
        value: secondD.value,
        image: secondD.image
      });
    }
  };
  const handleOitavasJ6 = (quartasJ2Visit) => {
    if (quartasJ2Visit.value == primaryD.value) {
      setQualificationQuartasJ2Visit({
        value: primaryD.value,
        image: primaryD.image
      });
    } else {
      setQualificationQuartasJ2Visit({
        value: secondC.value,
        image: secondC.image
      });
    }
  };
  const handleOitavasJ3 = (quartasJ3Home) => {
    if (quartasJ3Home.value == primaryE.value) {
      setQualificationQuartasJ3Home({
        value: primaryE.value,
        image: primaryE.image
      });
    } else {
      setQualificationQuartasJ3Home({
        value: secondF.value,
        image: secondF.image
      });
    }
  };
  const handleOitavasJ7 = (quartasJ3Visit) => {
    if (quartasJ3Visit.value == primaryF.value) {
      setQualificationQuartasJ3Visit({
        value: primaryF.value,
        image: primaryF.image
      });
    } else {
      setQualificationQuartasJ3Visit({
        value: secondE.value,
        image: secondE.image
      });
    }
  };

  const handleOitavasJ4 = (quartasJ4Home) => {
    if (quartasJ4Home.value == primaryG.value) {
      setQualificationQuartasJ4Home({
        value: primaryG.value,
        image: primaryG.image
      });
    } else {
      setQualificationQuartasJ4Home({
        value: secondH.value,
        image: secondH.image
      });
    }
  };
  const handleOitavasJ8 = (quartasJ4Visit) => {
    if (quartasJ4Visit.value == primaryH.value) {
      setQualificationQuartasJ4Visit({
        value: primaryH.value,
        image: primaryH.image
      });
    } else {
      setQualificationQuartasJ4Visit({
        value: secondG.value,
        image: secondG.image
      });
    }
  };

  const handleQuartas1 = (nationsClassificatedSemi1) => {
    if (nationsClassificatedSemi1.value == qualificationQuartasJ1Home.value) {
      setQualificationSemi1({
        value: qualificationQuartasJ1Home.value,
        image: qualificationQuartasJ1Home.image
      });
    } else {
      setQualificationSemi1({
        value: qualificationQuartasJ2Home.value,
        image: qualificationQuartasJ2Home.image
      });
    }
  };
  const handleQuartas2 = (nationsClassificatedSemi2) => {
    if (nationsClassificatedSemi2.value == qualificationQuartasJ3Home.value) {
      setQualificationSemi2({
        value: qualificationQuartasJ3Home.value,
        image: qualificationQuartasJ3Home.image
      });
    } else {
      setQualificationSemi2({
        value: qualificationQuartasJ4Home.value,
        image: qualificationQuartasJ4Home.image
      });
    }
  };
  const handleQuartas3 = (nationsClassificatedSemi3) => {
    if (nationsClassificatedSemi3.value == qualificationQuartasJ1Visit.value) {
      setQualificationSemi3({
        value: qualificationQuartasJ1Visit.value,
        image: qualificationQuartasJ1Visit.image
      });
    } else {
      setQualificationSemi3({
        value: qualificationQuartasJ2Visit.value,
        image: qualificationQuartasJ2Visit.image
      });
    }
  };
  const handleQuartas4 = (nationsClassificatedSemi4) => {
    if (nationsClassificatedSemi4.value == qualificationQuartasJ3Visit.value) {
      setQualificationSemi4({
        value: qualificationQuartasJ3Visit.value,
        image: qualificationQuartasJ3Visit.image
      });
    } else {
      setQualificationSemi4({
        value: qualificationQuartasJ4Visit.value,
        image: qualificationQuartasJ4Visit.image
      });
    }
  };

  const handleSemi1 = (nationsClassificatedFinal1) => {
    if (nationsClassificatedFinal1.value == qualificationSemi1.value) {
      setQualificationFinal1({
        value: qualificationSemi1.value,
        image: qualificationSemi1.image
      });
      setQualificationThirdPosition1({
        value: qualificationSemi2.value,
        image: qualificationSemi2.image
      });
    } else {
      setQualificationFinal1({
        value: qualificationSemi2.value,
        image: qualificationSemi2.image
      });
      setQualificationThirdPosition1({
        value: qualificationSemi1.value,
        image: qualificationSemi1.image
      });
    }
  }
  const handleSemi2 = (nationsClassificatedFinal2) => {
    if (nationsClassificatedFinal2.value == qualificationSemi3.value) {
      setQualificationFinal2({
        value: qualificationSemi3.value,
        image: qualificationSemi3.image
      });
      setQualificationThirdPosition2({
        value: qualificationSemi4.value,
        image: qualificationSemi4.image
      });
    } else {
      setQualificationFinal2({
        value: qualificationSemi4.value,
        image: qualificationSemi4.image
      });
      setQualificationThirdPosition2({
        value: qualificationSemi3.value,
        image: qualificationSemi3.image
      });
    }
  }

  const handleThirdPosition = (nationsSelected) => {
    if (nationsSelected.value == qualificationThirdPosition1.value) {
      setThirdPosition({
        value: qualificationThirdPosition1.value,
        image: qualificationThirdPosition1.image
      });
      setFourPosition({
        value: qualificationThirdPosition2.value,
        image: qualificationThirdPosition2.image
      });
    } else {
      setThirdPosition({
        value: qualificationThirdPosition2.value,
        image: qualificationThirdPosition2.image
      });
      setFourPosition({
        value: qualificationThirdPosition1.value,
        image: qualificationThirdPosition1.image
      });
    }
  }

  const handleFinal = (nationsFinal) => {
    if (nationsFinal.value == qualificationFinal1.value) {
      setChampionPosition({
        value: qualificationFinal1.value,
        image: qualificationFinal1.image
      });
      setVicePosition({
        value: qualificationFinal2.value,
        image: qualificationFinal2.image
      });
    } else {
      setChampionPosition({
        value: qualificationFinal2.value,
        image: qualificationFinal2.image
      });
      setVicePosition({
        value: qualificationFinal1.value,
        image: qualificationFinal1.image
      });
    }
  }

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
                  Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryA.value}
                  helperText="1º do Grupo A"
                  onChange={handleChangeSelectedPrimaryA}
                >
                  {gropoa1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondA.value}
                  helperText="2º do Grupo A"
                  onChange={handleChangeSelectedSecondA}
                >
                  {nationsRestA.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryB.value}
                  helperText="1º do Grupo B"
                  onChange={handleChangeSelectedPrimaryB}
                >
                  {gropob1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondB.value}
                  helperText="2º do Grupo B"
                  onChange={handleChangeSelectedSecondB}
                >
                  {nationsRestB.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryC.value}
                  helperText="1º do Grupo C"
                  onChange={handleChangeSelectedPrimaryC}
                >
                  {gropoc1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondC.value}
                  helperText="2º do Grupo C"
                  onChange={handleChangeSelectedSecondC}
                >
                  {nationsRestC.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryD.value}
                  helperText="1º do Grupo D"
                  onChange={handleChangeSelectedPrimaryD}
                >
                  {gropod1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondD.value}
                  helperText="2º do Grupo D"
                  onChange={handleChangeSelectedSecondD}
                >
                  {nationsRestD.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryE.value}
                  helperText="1º do Grupo E"
                  onChange={handleChangeSelectedPrimaryE}
                >
                  {gropoe1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondE.value}
                  helperText="2º do Grupo E"
                  onChange={handleChangeSelectedSecondE}
                >
                  {nationsRestE.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryF.value}
                  helperText="1º do Grupo F"
                  onChange={handleChangeSelectedPrimaryF}
                >
                  {gropof1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondF.value}
                  helperText="2º do Grupo F"
                  onChange={handleChangeSelectedSecondF}
                >
                  {nationsRestF.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryG.value}
                  helperText="1º do Grupo G"
                  onChange={handleChangeSelectedPrimaryG}
                >
                  {gropog1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondG.value}
                  helperText="2º do Grupo G"
                  onChange={handleChangeSelectedSecondG}
                >
                  {nationsRestG.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
                Escolha os classificados 
                </button>
                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={primaryH.value}
                  helperText="1º do Grupo H"
                  onChange={handleChangeSelectedPrimaryH}
                >
                  {gropoh1.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  color="info"
                  select
                  margin="normal"
                  value={secondH.value}
                  helperText="2º do Grupo H"
                  onChange={handleChangeSelectedSecondH}
                >
                  {nationsRestH.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Oitavas de Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 1</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryA.value}>
                <button value={primaryA.value} onClick={() => handleOitavasJ1(primaryA)}>
                  <Image src={`/./icon-${primaryA.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondB.value}>
                <button value={secondB.value} onClick={() => handleOitavasJ1(secondB)}>
                  <Image src={`/./icon-${secondB.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 2</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryC.value}>
                <button value={primaryC.value} onClick={() => handleOitavasJ2(primaryC)}>
                  <Image src={`/./icon-${primaryC.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondD.value}>
                <button value={secondD.value} onClick={() => handleOitavasJ2(secondD)}>
                  <Image src={`/./icon-${secondD.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 3</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryE.value}>
                <button value={primaryE.value} onClick={() => handleOitavasJ3(primaryE)}>
                  <Image src={`/./icon-${primaryE.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondF.value}>
                <button value={secondF.value} onClick={() => handleOitavasJ3(secondF)}>
                  <Image src={`/./icon-${secondF.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 4</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryG.value}>
                <button value={primaryG.value} onClick={() => handleOitavasJ4(primaryG)}>
                  <Image src={`/./icon-${primaryG.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondH.value}>
                <button value={secondH.value} onClick={() => handleOitavasJ4(secondH)}>
                  <Image src={`/./icon-${secondH.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 5</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryB.value}>
                <button value={primaryB.value} onClick={() => handleOitavasJ5(primaryB)}>
                  <Image src={`/./icon-${primaryB.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondA.value}>
                <button value={secondA.value} onClick={() => handleOitavasJ5(secondA)}>
                  <Image src={`/./icon-${secondA.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 6</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryD.value}>
                <button value={primaryD.value} onClick={() => handleOitavasJ6(primaryD)}>
                  <Image src={`/./icon-${primaryD.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondC.value}>
                <button value={secondC.value} onClick={() => handleOitavasJ6(secondC)}>
                  <Image src={`/./icon-${secondC.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 7</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryF.value}>
                <button value={primaryF.value} onClick={() => handleOitavasJ7(primaryF)}>
                  <Image src={`/./icon-${primaryF.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondE.value}>
                <button value={secondE.value} onClick={() => handleOitavasJ7(secondE)}>
                  <Image src={`/./icon-${secondE.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Oitavas 8</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={primaryH.value}>
                <button value={primaryH.value} onClick={() => handleOitavasJ8(primaryH)}>
                  <Image src={`/./icon-${primaryH.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={secondG.value}>
                <button value={secondG.value} onClick={() => handleOitavasJ8(secondG)}>
                  <Image src={`/./icon-${secondG.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section> 
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Quartas de Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Quartas 1</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationQuartasJ1Home.value}>
                <button value={qualificationQuartasJ1Home.value} onClick={() => handleQuartas1(qualificationQuartasJ1Home)}>
                  <Image src={`/./icon-${qualificationQuartasJ1Home.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationQuartasJ2Home.value}>
                <button value={qualificationQuartasJ2Home.value} onClick={() => handleQuartas1(qualificationQuartasJ2Home)}>
                  <Image src={`/./icon-${qualificationQuartasJ2Home.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Quartas 2</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationQuartasJ3Home.value}>
                <button value={qualificationQuartasJ3Home.value} onClick={() => handleQuartas2(qualificationQuartasJ3Home)}>
                  <Image src={`/./icon-${qualificationQuartasJ3Home.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationQuartasJ4Home.value}>
                <button value={qualificationQuartasJ4Home.value} onClick={() => handleQuartas2(qualificationQuartasJ4Home)}>
                  <Image src={`/./icon-${qualificationQuartasJ4Home.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Quartas 3</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationQuartasJ1Visit.value}>
                <button value={qualificationQuartasJ1Visit.value} onClick={() => handleQuartas3(qualificationQuartasJ1Visit)}>
                  <Image src={`/./icon-${qualificationQuartasJ1Visit.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationQuartasJ2Visit.value}>
                <button value={qualificationQuartasJ2Visit.value} onClick={() => handleQuartas3(qualificationQuartasJ2Visit)}>
                  <Image src={`/./icon-${qualificationQuartasJ2Visit.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-3/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Quartas 4</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationQuartasJ3Visit.value}>
                <button value={qualificationQuartasJ3Visit.value} onClick={() => handleQuartas4(qualificationQuartasJ3Visit)}>
                  <Image src={`/./icon-${qualificationQuartasJ3Visit.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationQuartasJ4Visit.value}>
                <button value={qualificationQuartasJ4Visit.value} onClick={() => handleQuartas4(qualificationQuartasJ4Visit)}>
                  <Image src={`/./icon-${qualificationQuartasJ4Visit.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Semifinal</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-6/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Semifinais 1</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationSemi1.value}>
                <button value={qualificationSemi1.value} onClick={() => handleSemi1(qualificationSemi1)}>
                  <Image src={`/./icon-${qualificationSemi1.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationSemi2.value}>
                <button value={qualificationSemi2.value} onClick={() => handleSemi1(qualificationSemi2)}>
                  <Image src={`/./icon-${qualificationSemi2.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
          <div className="w-6/12 max-md:w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">Semifinais 2</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationSemi3.value}>
                <button value={qualificationSemi3.value} onClick={() => handleSemi2(qualificationSemi3)}>
                  <Image src={`/./icon-${qualificationSemi3.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationSemi4.value}>
                <button value={qualificationSemi4.value} onClick={() => handleSemi2(qualificationSemi4)}>
                  <Image src={`/./icon-${qualificationSemi4.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>


      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Disputa do 3º Lugar</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">3º Lugar</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationThirdPosition1.value}>
                <button value={qualificationThirdPosition1.value} onClick={() => handleThirdPosition(qualificationThirdPosition1)}>
                  <Image src={`/./icon-${qualificationThirdPosition1.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationThirdPosition2.value}>
                <button value={qualificationThirdPosition2.value} onClick={() => handleThirdPosition(qualificationThirdPosition2)}>
                  <Image src={`/./icon-${qualificationThirdPosition2.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <span className="text-blue-300 my-4">GRANDE FINAL</span>
            <ul className="flex justify-center items-center gap-4">
              <li id={qualificationFinal1.value}>
                <button value={qualificationFinal1.value} onClick={() => handleFinal(qualificationFinal1)}>
                  <Image src={`/./icon-${qualificationFinal1.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
              <li> x </li>
              <li id={qualificationFinal2.value}>
                <button value={qualificationFinal2.value} onClick={() => handleFinal(qualificationFinal2)}>
                  <Image src={`/./icon-${qualificationFinal2.image}.svg`} alt="" height="50" width="50" />
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-7">
        <h2 className="text-2xl">Classificação Final</h2>
        <section className="w-full flex max-md:flex-col">
          <div className="w-full flex flex-col justify-center items-center bg-gray-700 rounded py-4 px-4 mt-2 mb-2 mx-2 max-md:mx-0">
            <ul className="flex justify-center items-center gap-4">
              <li>
                1º <Image src={`/./icon-${ChampionPosition.image}.svg`} alt="" height="50" width="50" />
              </li>
              <li>
                2º <Image src={`/./icon-${vicePosition.image}.svg`} alt="" height="50" width="50" />
              </li>
              <li>
                3º <Image src={`/./icon-${thirdPosition.image}.svg`} alt="" height="50" width="50" />
              </li>
              <li>
                4º <Image src={`/./icon-${fourPosition.image}.svg`} alt="" height="50" width="50" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}