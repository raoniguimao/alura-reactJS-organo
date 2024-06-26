import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
    const timeList = [
        {nome: 'Programação', corPrimaria: '#57c278', corSecundaria: '#d9f7e9'},
        {nome: 'Front-end', corPrimaria: '#82cffa', corSecundaria: '#e8f8ff'},
        {nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
        {nome: 'DevOps', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
        {nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5'},
        {nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'},
        {nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
    ];
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    }
    return (
        <div className="App">
            <Banner />
            <Formulario equipes={timeList.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

        {timeList.map(time =>
            <Time
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.equipe === time.nome)}
            />
        )}
            <Rodape />
        </div>
    );
}

export default App;
