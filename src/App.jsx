import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Timer from './components/Timer'

function App() {
  const [timerSecondsComentariosIniciais, setTimerSecondsComentariosIniciais] = useState(0);
  const [timerMinutesComentariosIniciais, setTimerMinutesComentariosIniciais] = useState(0);
  const [timerRunningComentariosIniciais, setTimerRunningComentariosIniciais] = useState(false);
  const timerStartTimeRefComentariosIniciais = useRef(null);

  const [timerSecondsDiscurso, setTimerSecondsDiscurso] = useState(0);
  const [timerMinutesDiscurso, setTimerMinutesDiscurso] = useState(0);
  const [timerRunningDiscurso, setTimerRunningDiscurso] = useState(false);
  const timerStartTimeRefDiscurso = useRef(null);

  const [timerSecondsJoiasEspirituais, setTimerSecondsJoiasEspirituais] = useState(0);
  const [timerMinutesJoiasEspirituais, setTimerMinutesJoiasEspirituais] = useState(0);
  const [timerRunningJoiasEspirituais, setTimerRunningJoiasEspirituais] = useState(false);
  const timerStartTimeRefJoiasEspirituais = useRef(null);

  const [timerSecondsLeituraBiblia, setTimerSecondsLeituraBiblia] = useState(0);
  const [timerMinutesLeituraBiblia, setTimerMinutesLeituraBiblia] = useState(0);
  const [timerRunningLeituraBiblia, setTimerRunningLeituraBiblia] = useState(false);
  const timerStartTimeRefLeituraBiblia = useRef(null);

  const [timerSecondsParte1, setTimerSecondsParte1] = useState(0);
  const [timerMinutesParte1, setTimerMinutesParte1] = useState(0);
  const [timerRunningParte1, setTimerRunningParte1] = useState(false);
  const timerStartTimeRefParte1 = useRef(null);

  const [timerSecondsParte2, setTimerSecondsParte2] = useState(0);
  const [timerMinutesParte2, setTimerMinutesParte2] = useState(0);
  const [timerRunningParte2, setTimerRunningParte2] = useState(false);
  const timerStartTimeRefParte2 = useRef(null);

  const [timerSecondsParte3, setTimerSecondsParte3] = useState(0);
  const [timerMinutesParte3, setTimerMinutesParte3] = useState(0);
  const [timerRunningParte3, setTimerRunningParte3] = useState(false);
  const timerStartTimeRefParte3 = useRef(null);

  const [timerSecondsParte1NVC, setTimerSecondsParte1NVC] = useState(0);
  const [timerMinutesParte1NVC, setTimerMinutesParte1NVC] = useState(0);
  const [timerRunningParte1NVC, setTimerRunningParte1NVC] = useState(false);
  const timerStartTimeRefParte1NVC = useRef(null);

  const [timerSecondsParte2NVC, setTimerSecondsParte2NVC] = useState(0);
  const [timerMinutesParte2NVC, setTimerMinutesParte2NVC] = useState(0);
  const [timerRunningParte2NVC, setTimerRunningParte2NVC] = useState(false);
  const timerStartTimeRefParte2NVC = useRef(null);

  const [timerSecondsEstudoCongregacao, setTimerSecondsEstudoCongregacao] = useState(0);
  const [timerMinutesEstudoCongregacao, setTimerMinutesEstudoCongregacao] = useState(0);
  const [timerRunningEstudoCongregacao, setTimerRunningEstudoCongregacao] = useState(false);
  const timerStartTimeRefEstudoCongregacao = useRef(null);

  const [timerSecondsComentariosFinais, setTimerSecondsComentariosFinais] = useState(0);
  const [timerMinutesComentariosFinais, setTimerMinutesComentariosFinais] = useState(0);
  const [timerRunningComentariosFinais, setTimerRunningComentariosFinais] = useState(false);
  const timerStartTimeRefComentariosFinais = useRef(null);

  /* commentSeconds, setCommentSeconds, commentMinutes, setCommentMinutes, commentRunning, setCommentRunning, commentStartTimeRef */
  const [commentSecondsLeituraBiblia, setCommentSecondsLeituraBiblia] = useState(0);
  const [commentMinutesLeituraBiblia, setCommentMinutesLeituraBiblia] = useState(0);
  const [commentRunningLeituraBiblia, setCommentRunningLeituraBiblia] = useState(false);
  const commentStartTimeRefLeituraBiblia = useRef(null);
  
  const [commentSecondsParte1, setCommentSecondsParte1] = useState(0);
  const [commentMinutesParte1, setCommentMinutesParte1] = useState(0);
  const [commentRunningParte1, setCommentRunningParte1] = useState(false);
  const commentStartTimeRefParte1 = useRef(null);
  
  const [commentSecondsParte2, setCommentSecondsParte2] = useState(0);
  const [commentMinutesParte2, setCommentMinutesParte2] = useState(0);
  const [commentRunningParte2, setCommentRunningParte2] = useState(false);
  const commentStartTimeRefParte2 = useRef(null);
  
  const [commentSecondsParte3, setCommentSecondsParte3] = useState(0);
  const [commentMinutesParte3, setCommentMinutesParte3] = useState(0);
  const [commentRunningParte3, setCommentRunningParte3] = useState(false);
  const commentStartTimeRefParte3 = useRef(null);
  
  const [commentSecondsParte1NVC, setCommentSecondsParte1NVC] = useState(0);
  const [commentMinutesParte1NVC, setCommentMinutesParte1NVC] = useState(0);
  const [commentRunningParte1NVC, setCommentRunningParte1NVC] = useState(false);
  const commentStartTimeRefParte1NVC = useRef(null);
  
  const [commentSecondsParte2NVC, setCommentSecondsParte2NVC] = useState(0);
  const [commentMinutesParte2NVC, setCommentMinutesParte2NVC] = useState(0);
  const [commentRunningParte2NVC, setCommentRunningParte2NVC] = useState(false);
  const commentStartTimeRefParte2NVC = useRef(null);

  async function copiarRelatório () {
    const data = new Date()
    const mes = data.getMonth()+1;
    const text = `Relatório de reunião semanal - referente ${data.getDate()}/${mes < 10 ? `0${mes}` : mes}/${data.getFullYear()}

      Tesouros da Palavra de Deus
        Comentários iniciais: ${timerMinutesComentariosIniciais}:${timerSecondsComentariosIniciais}
        Discurso: ${timerMinutesDiscurso}:${timerSecondsDiscurso}
        Joias Espirituais: ${timerMinutesJoiasEspirituais}:${timerSecondsJoiasEspirituais}
        Leitura da Bíblia: ${timerMinutesLeituraBiblia}:${timerSecondsLeituraBiblia} - Comentários ${commentMinutesLeituraBiblia}:${commentSecondsLeituraBiblia}
      
      Faça seu melhor no ministério
        Parte 1: ${timerMinutesParte1}:${timerSecondsParte1} - Comentários ${commentMinutesParte1}:${commentSecondsParte1}
        Parte 2: ${timerMinutesParte2}:${timerSecondsParte2} - Comentários ${commentMinutesParte2}:${commentSecondsParte2}
        Parte 3: ${timerMinutesParte3}:${timerSecondsParte3} - Comentários ${commentMinutesParte3}:${commentSecondsParte3}

      Nossa vida cristã
        Discurso 1: ${timerMinutesParte1NVC}:${timerSecondsParte1NVC}
        Discurso 2: ${timerMinutesParte2NVC}:${timerSecondsParte2NVC}
        Estudo bíblico de congregação: ${timerMinutesEstudoCongregacao}:${timerSecondsEstudoCongregacao}
        Comentários finais e anúncios: ${timerMinutesComentariosFinais}:${timerSecondsComentariosFinais}
        `
    try {
      await navigator.clipboard.writeText(text)
      alert("Deu certo 🦾")
    } catch (error) {
      alert("Deu paia 🤐")
    }
  }

  return (
    <>
      <Header />
      <section className='pb-4 flex flex-col justify-center gap-8'>
        <section className='p-1 flex-col pt-4'>
          <h1 className='text-2xl text-center text-cyan-500 font-medium'>Tesouros da Palavra de Deus</h1>
          <Timer 
          title="Comentários iniciais" 
          min={1}
          setTimerSeconds={setTimerSecondsComentariosIniciais}
          timerSeconds={timerSecondsComentariosIniciais}
          timerMinutes={timerMinutesComentariosIniciais}
          setTimerMinutes={setTimerMinutesComentariosIniciais}
          timerRunning={timerRunningComentariosIniciais}
          setTimerRunning={setTimerRunningComentariosIniciais}
          timerStartTimeRef={timerStartTimeRefComentariosIniciais}
          />
        
        <Timer 
            title="Discurso"
            min={10}
            setTimerSeconds={setTimerSecondsDiscurso}
            timerSeconds={timerSecondsDiscurso}
            timerMinutes={timerMinutesDiscurso}
            setTimerMinutes={setTimerMinutesDiscurso}
            timerRunning={timerRunningDiscurso}
            setTimerRunning={setTimerRunningDiscurso}
            timerStartTimeRef={timerStartTimeRefDiscurso}
          />

          <Timer 
            title="Encontre Joias Espirituais"
            min={10}
            setTimerSeconds={setTimerSecondsJoiasEspirituais}
            timerSeconds={timerSecondsJoiasEspirituais}
            timerMinutes={timerMinutesJoiasEspirituais}
            setTimerMinutes={setTimerMinutesJoiasEspirituais}
            timerRunning={timerRunningJoiasEspirituais}
            setTimerRunning={setTimerRunningJoiasEspirituais}
            timerStartTimeRef={timerStartTimeRefJoiasEspirituais}
          />

          <Timer 
            title="Leitura da Bíblia"
            min={4}
            setTimerSeconds={setTimerSecondsLeituraBiblia}
            timerSeconds={timerSecondsLeituraBiblia}
            timerMinutes={timerMinutesLeituraBiblia}
            setTimerMinutes={setTimerMinutesLeituraBiblia}
            timerRunning={timerRunningLeituraBiblia}
            setTimerRunning={setTimerRunningLeituraBiblia}
            timerStartTimeRef={timerStartTimeRefLeituraBiblia}
            isComment
            commentSeconds={commentSecondsLeituraBiblia}
            setCommentSeconds={setCommentSecondsLeituraBiblia}
            commentMinutes={commentMinutesLeituraBiblia}
            setCommentMinutes={setCommentMinutesLeituraBiblia}
            commentRunning={commentRunningLeituraBiblia}
            setCommentRunning={setCommentRunningLeituraBiblia}
            commentStartTimeRef={commentStartTimeRefLeituraBiblia}
          />


        </section>
        <section className='p-1 flex-col pt-4'>
          <h1 className='text-2xl text-center text-amber-500 font-medium'>Faça seu melhor no ministério</h1>

          <Timer 
            title="Parte 1"
            min={""}
            setTimerSeconds={setTimerSecondsParte1}
            timerSeconds={timerSecondsParte1}
            timerMinutes={timerMinutesParte1}
            setTimerMinutes={setTimerMinutesParte1}
            timerRunning={timerRunningParte1}
            setTimerRunning={setTimerRunningParte1}
            timerStartTimeRef={timerStartTimeRefParte1}
            isComment
            commentSeconds={commentSecondsParte1}
            setCommentSeconds={setCommentSecondsParte1}
            commentMinutes={commentMinutesParte1}
            setCommentMinutes={setCommentMinutesParte1}
            commentRunning={commentRunningParte1}
            setCommentRunning={setCommentRunningParte1}
            commentStartTimeRef={commentStartTimeRefParte1}
          />

          <Timer 
            title="Parte 2"
            min={""}
            setTimerSeconds={setTimerSecondsParte2}
            timerSeconds={timerSecondsParte2}
            timerMinutes={timerMinutesParte2}
            setTimerMinutes={setTimerMinutesParte2}
            timerRunning={timerRunningParte2}
            setTimerRunning={setTimerRunningParte2}
            timerStartTimeRef={timerStartTimeRefParte2}
            isComment
            commentSeconds={commentSecondsParte2}
            setCommentSeconds={setCommentSecondsParte2}
            commentMinutes={commentMinutesParte2}
            setCommentMinutes={setCommentMinutesParte2}
            commentRunning={commentRunningParte2}
            setCommentRunning={setCommentRunningParte2}
            commentStartTimeRef={commentStartTimeRefParte2}
          />


          <Timer 
            title="Parte 3"
            min={""}
            setTimerSeconds={setTimerSecondsParte3}
            timerSeconds={timerSecondsParte3}
            timerMinutes={timerMinutesParte3}
            setTimerMinutes={setTimerMinutesParte3}
            timerRunning={timerRunningParte3}
            setTimerRunning={setTimerRunningParte3}
            timerStartTimeRef={timerStartTimeRefParte3}
            isComment
            commentSeconds={commentSecondsParte3}
            setCommentSeconds={setCommentSecondsParte3}
            commentMinutes={commentMinutesParte3}
            setCommentMinutes={setCommentMinutesParte3}
            commentRunning={commentRunningParte3}
            setCommentRunning={setCommentRunningParte3}
            commentStartTimeRef={commentStartTimeRefParte3}
          />
          
        </section>

        <section className='p-1 flex-col pt-4'>
          <h1 className='text-2xl text-center text-red-500 font-medium'>Nossa vida cristã</h1>

          <Timer 
            title="Parte 1"
            min={""}
            setTimerSeconds={setTimerSecondsParte1NVC}
            timerSeconds={timerSecondsParte1NVC}
            timerMinutes={timerMinutesParte1NVC}
            setTimerMinutes={setTimerMinutesParte1NVC}
            timerRunning={timerRunningParte1NVC}
            setTimerRunning={setTimerRunningParte1NVC}
            timerStartTimeRef={timerStartTimeRefParte1NVC}
            isComment
            commentSeconds={commentSecondsParte1NVC}
            setCommentSeconds={setCommentSecondsParte1NVC}
            commentMinutes={commentMinutesParte1NVC}
            setCommentMinutes={setCommentMinutesParte1NVC}
            commentRunning={commentRunningParte1NVC}
            setCommentRunning={setCommentRunningParte1NVC}
            commentStartTimeRef={commentStartTimeRefParte1NVC}
          />

          <Timer 
            title="Parte 2"
            min={""}
            setTimerSeconds={setTimerSecondsParte2NVC}
            timerSeconds={timerSecondsParte2NVC}
            timerMinutes={timerMinutesParte2NVC}
            setTimerMinutes={setTimerMinutesParte2NVC}
            timerRunning={timerRunningParte2NVC}
            setTimerRunning={setTimerRunningParte2NVC}
            timerStartTimeRef={timerStartTimeRefParte2NVC}
            isComment
            commentSeconds={commentSecondsParte2NVC}
            setCommentSeconds={setCommentSecondsParte2NVC}
            commentMinutes={commentMinutesParte2NVC}
            setCommentMinutes={setCommentMinutesParte2NVC}
            commentRunning={commentRunningParte2NVC}
            setCommentRunning={setCommentRunningParte2NVC}
            commentStartTimeRef={commentStartTimeRefParte2NVC}
          />


          <Timer 
            title="Estudo bíblico de congregação"
            min={30}
            setTimerSeconds={setTimerSecondsEstudoCongregacao}
            timerSeconds={timerSecondsEstudoCongregacao}
            timerMinutes={timerMinutesEstudoCongregacao}
            setTimerMinutes={setTimerMinutesEstudoCongregacao}
            timerRunning={timerRunningEstudoCongregacao}
            setTimerRunning={setTimerRunningEstudoCongregacao}
            timerStartTimeRef={timerStartTimeRefEstudoCongregacao}
          />

          <Timer 
            title="Comentários finais e anúncios"
            min={3}
            setTimerSeconds={setTimerSecondsComentariosFinais}
            timerSeconds={timerSecondsComentariosFinais}
            timerMinutes={timerMinutesComentariosFinais}
            setTimerMinutes={setTimerMinutesComentariosFinais}
            timerRunning={timerRunningComentariosFinais}
            setTimerRunning={setTimerRunningComentariosFinais}
            timerStartTimeRef={timerStartTimeRefComentariosFinais}
          />

        </section>
        <button 
        className='bg-slate-600 p-2 text-xl rounded mx-auto mt-4'
        onClick={copiarRelatório}
        >Copiar relatório</button>
      </section>
    </>
  )
}

export default App
