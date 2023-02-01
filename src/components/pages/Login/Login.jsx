import { Link} from "react-router-dom";
import "./login.scss";




function Login() {
  return (
    
    <div className="login">
        <div className="card">
            <div className="left">
            <h1>Potrzebujesz pomocy?</h1>
            <p>Dzięki HH Twoje życie może stać się prostsze i przyjemniejsze!
               Zatrudniając pomoc domową dajesz sobie więcej czasu i przestrzeni na swoje pasje
               i zainteresowania, a komuś, kto potzrebuje pomocy możliwość zatrudnienia. Ty wybierasz!

            </p>
            <span>Nie masz jeszcze konta?</span>
            <Link to="/rejestracja"><button >Zarejestruj się!</button></Link>
            
            </div>
            
            <div className="right">
                <h1>Logowanie</h1>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Hasło"/>
                    <Link to="/"><button >Zaloguj</button></Link>
                   

                </form>
            </div>
        </div>
      
    </div>
    
  )
}

export default Login
