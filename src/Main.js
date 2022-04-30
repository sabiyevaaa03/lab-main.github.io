import './Main.css';

const Main = () => {
  return(
    <div className='Main'> 
     <div class="ph"><img src="/img/ph.png" /></div>
     <h1 class="main-item">Поиск репетитора по ID:</h1>
     <input class="main-item" type="text"></input>
        <button className="button1">Найти</button>
    <p class="main-item">Мы — профессиональное сообщество частных репетиторов, объединяющее более 300 тысяч преподавателей.
        На сайте вы можете ознакомиться с анкетами преподавателей и выбрать тех, кто вам подходит, или спросить совета,
        и мы вам порекомендуем оптимальные варианты. Наши консультации и подбор подходящего вам репетитора — бесплатны.
        Вы оплачиваете только сами занятия непосредственно преподавателю.
    </p>
    
                
     </div>
  )
}

export default Main;


   