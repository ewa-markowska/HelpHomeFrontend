import "./addOffer.scss";
import { Link} from "react-router-dom";
import Tickbox from "../../tickbox";



function AddOffer() {
  return (
    <div className="addOffer">
        <div className="card">
            <div className="right">
            {/* <h1>Witaj miłośniku życia!</h1>
            <p>Dzięki HH Twoje życie może stać się prostsze i przyjemniejsze!
               Zatrudniając pomoc domową dajesz sobie więcej czasu i przestrzeni na swoje pasje
               i zainteresowania, a komuś, kto potzrebuje pomocy możliwość zatrudnienia. Ty wybierasz! */}
            <Tickbox></Tickbox>
            {/* </p> */}
            {/* <span>Czy masz już konto?</span> */}
            <form>
                    
                    
            
                </form>

                <a href="/dodajoferte"><button >Dodaj ofertę</button></a>
            
            
            </div>
            
            <div className="right">
                <h1>Dodaj ofertę</h1>
                <h5>Uzupełnij dane osobowe</h5>
                <form>
                    <input type="text" placeholder="Telefon"/>
                    <input type="email" placeholder="Miasto"/>
                    <input type="password" placeholder="Województwo"/>
                    <input type="password" placeholder="Treść ogłoszenia"/>
                    

                </form>
            </div>
        </div>
      
    </div>
  )
}

export default AddOffer
