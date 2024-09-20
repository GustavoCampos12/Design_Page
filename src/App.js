import { useState } from 'react';
import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner'

import './App.css';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';

export default function App() {

	const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
	    <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
      <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
		</main>
  );
}