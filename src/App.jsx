import { useState, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import CommentTimer from './components/CommentTimer'
import PresentationTimer from './components/PresentationTimer'


const sections = {
  TREASURES: {
    id: 'treasures',
    name: 'Tesouros da Palavra de Deus',
    color: 'text-cyan-500',
    presentations: [
      { name: 'Comentários iniciais', recommendedTime: 1 * 60 },
      { name: 'Discurso', recommendedTime: 10 * 60 },
      { name: 'Joias Espirituais', recommendedTime: 10 * 60 },
      { name: 'Leitura da Bíblia', recommendedTime: 4 * 60 },
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
      { name: 'Estudo bíblico de congregação', recommendedTime: 30 * 60 },
      { name: 'Comentários finais e anúncios', recommendedTime: 3 * 60 },
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
        const commentTime = report[section.id]?.[`${presentation.name} - Comentários`] || '00:00';
        reportText += `  ${presentation.name}: ${time}`;
        reportText += presentation.hasComments ? `  - Comentários: ${commentTime}\n` : '\n';
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
              <>
                <PresentationTimer 
                  key={`${section.id}-presentation-${index}`} 
                  presentation={presentation}
                  onSave={(timer) => saveOnReport(section.id, presentation.name, timer)}
                />
                {presentation.hasComments && (
                  <CommentTimer 
                    key={`${section.id}-presentation-${index}-comments`} 
                    presentation={presentation}
                    onSave={(timer) => saveOnReport(section.id, `${presentation.name} - Comentários`, timer)}
                  />
                )}
              </>
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