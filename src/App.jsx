import { useState, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import Timer2 from './components/Timer2'


const sections = {
  TREASURES: {
    id: 'treasures',
    name: 'Tesouros da Palavra de Deus',
    color: 'text-cyan-500',
    presentations: [
      { name: 'Comentários iniciais', recommendedTime: '1 minuto' },
      { name: 'Discurso', recommendedTime: '10 minutos' },
      { name: 'Joias Espirituais', recommendedTime: '10 minutos' },
      { name: 'Leitura da Bíblia', recommendedTime: '4 minutos' },
    ]
  },
  MINISTRY: {
    id: 'ministry',
    name: 'Tesouros da Palavra de Deus',
    color: 'text-amber-500',
    presentations: [
      { name: 'Parte 1', hasComments: true },
      { name: 'Parte 2', hasComments: true },
      { name: 'Parte 3', hasComments: true },
    ]
  },
  CHRISTIANS: {
    id: 'christians',
    name: 'Tesouros da Palavra de Deus',
    color: 'text-red-500',
    presentations: [
      { name: 'Discurso 1' },
      { name: 'Discurso 2' },
      { name: 'Estudo bíblico de congregação', recommendedTime: '30 minutos' },
      { name: 'Comentários finais e anúncios', recommendedTime: '3 minutos' },
    ]
  }
}

function App() {
  const [report, setReport] = useState({
    treasures: {},
    ministry: {},
    christians: {}
  });
  
  // useCallback é util para manter a referencia da mesma funcao em todos os elementos filhos em vez de recriar uma para cada uma
  const saveOnReport = useCallback((sectionId, presentationName, timer) => {
    setReport((prevReport) => ({
      ...prevReport,
      [sectionId]: {
        ...prevReport[sectionId],
        [presentationName]: timer
      }
    }));
  }, []);

  const copyReport = async () => {
    const data = new Date();
    const mes = data.getMonth() + 1;
    const formattedDate = `${data.getDate()}/${mes < 10 ? `0${mes}` : mes}/${data.getFullYear()}`;
    let reportText = `Relatório de reunião semanal - referente ${formattedDate}\n\n`;

    Object.values(sections).forEach((section) => {
      reportText += `${section.name}\n`;
      section.presentations.forEach((presentation) => {
        const time = report[section.id]?.[presentation.name] || '00:00';
        reportText += `  ${presentation.name}: ${time}\n`;
      });
      reportText += '\n';
    });

    try {
      await navigator.clipboard.writeText(reportText);
      alert("Deu certo 🦾");
    } catch (error) {
      alert("Deu paia 🤐");
    }
  };

  return (
    <>
      <Header />
      <section className='pb-4 flex flex-col justify-center gap-8'>
        {Object.values(sections).map((section) => (
          <section key={section.id} className='p-1 flex-col pt-4'>
            <h1 className={`text-2xl text-center font-medium ${section.color}`}>
              {section.name}
            </h1>

            {section.presentations.map((presentation, index) => (
              <Timer2 
                key={`${section.id}-presentation-${index}`} 
                presentation={presentation}
                onSave={(timer) => saveOnReport(section.id, presentation.name, timer)}
              />
            ))}
          </section>
        ))}
        <button 
          className='bg-slate-600 p-2 text-xl rounded mx-auto mt-4'
          onClick={copyReport}
        >
          Copiar relatório
        </button>
      </section>
    </>
  )
}

export default App


  // async function copiarRelatório () {
  //   const data = new Date()
  //   const mes = data.getMonth()+1;
  //   const text = `Relatório de reunião semanal - referente ${data.getDate()}/${mes < 10 ? `0${mes}` : mes}/${data.getFullYear()}

  //     Tesouros da Palavra de Deus
  //       Comentários iniciais: ${timerMinutesComentariosIniciais}:${timerSecondsComentariosIniciais}
  //       Discurso: ${timerMinutesDiscurso}:${timerSecondsDiscurso}
  //       Joias Espirituais: ${timerMinutesJoiasEspirituais}:${timerSecondsJoiasEspirituais}
  //       Leitura da Bíblia: ${timerMinutesLeituraBiblia}:${timerSecondsLeituraBiblia} - Comentários ${commentMinutesLeituraBiblia}:${commentSecondsLeituraBiblia}
      
  //     Faça seu melhor no ministério
  //       Parte 1: ${timerMinutesParte1}:${timerSecondsParte1} - Comentários ${commentMinutesParte1}:${commentSecondsParte1}
  //       Parte 2: ${timerMinutesParte2}:${timerSecondsParte2} - Comentários ${commentMinutesParte2}:${commentSecondsParte2}
  //       Parte 3: ${timerMinutesParte3}:${timerSecondsParte3} - Comentários ${commentMinutesParte3}:${commentSecondsParte3}

  //     Nossa vida cristã
  //       Discurso 1: ${timerMinutesParte1NVC}:${timerSecondsParte1NVC}
  //       Discurso 2: ${timerMinutesParte2NVC}:${timerSecondsParte2NVC}
  //       Estudo bíblico de congregação: ${timerMinutesEstudoCongregacao}:${timerSecondsEstudoCongregacao}
  //       Comentários finais e anúncios: ${timerMinutesComentariosFinais}:${timerSecondsComentariosFinais}
  //       `
  //   try {
  //     await navigator.clipboard.writeText(text)
  //     alert("Deu certo 🦾")
  //   } catch (error) {
  //     alert("Deu paia 🤐")
  //   }
  // }