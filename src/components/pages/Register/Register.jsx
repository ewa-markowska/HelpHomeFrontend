import "./register.scss";
import { Link} from "react-router-dom";
import {useState} from 'react';




function Register() {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  function SignUp(){
    let item ={name,password,email}
  }

  return (
    <div className="register">
        <div className="card">
            <div className="left">
            <h1>Więcej czasu dla Ciebie!</h1>
            <p>Dzięki HH Twoje życie może stać się prostsze i przyjemniejsze!
               Zatrudniając pomoc domową dajesz sobie więcej czasu i przestrzeni na swoje pasje
               i zainteresowania, a komuś, kto potzrebuje pomocy możliwość zatrudnienia. Ty wybierasz!

            </p>
            <span>Czy masz już konto?</span>
            <Link to="/logowanie"><button >Zaloguj się!</button></Link>
            </div>
            
            <div className="right">
                <h1>Rejestracja</h1>
                <form>
                    <input type="text" placeholder="Użytkownik"
                    value ={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="Email"
                    value ={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Hasło"
                    value ={password}onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="password" placeholder="Powtórz hasło"/>
                    <Link to="/dodajoferte"><button onClick={SignUp} >Następny krok</button></Link>

                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Register
