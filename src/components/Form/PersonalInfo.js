import { motion } from "framer-motion";
import { toppings1 } from "../toppings1";
import Tickbox1 from "../tickbox1";
import Tickbox2 from "../tickbox2";
import Tickbox3 from "../tickbox3"

const LocationInfo = ({ formData, setFormData, page, setPage, x, setX })  => {
  return (
    <motion.div                            //updated the div tag
    initial={{ x: x }}
    transition={{ duration: 1 }}
    animate={{ x: 0 }}
  >
      <div className="card">
        <div className="step-title">Szczegóły oferty</div>
    
        <div className="space">Zaznacz właściwe:
        <div>
          <Tickbox1></Tickbox1>

        </div>

        < div className="space">Typ usługi:
        <div>
          <Tickbox2>
          </Tickbox2>
        </div>

        < div className="space">Dojazd w ramach:
        <div>
          <Tickbox3>
          </Tickbox3>
        </div>

   
         </div>

         

       
        </div>

       
        </div>
        <input
          type="text"
          placeholder="Cena za usługę"
        />
        
      
  
       <div className='button-area'>
      <button onClick={() => {setPage(page + 1); setX(2000);}}>
  Następny krok
</button>
      <br/>
      <button
  onClick={() => {
    setPage(page - 1);
    setX(-2000); 
  }}
>
  Poprzedni krok
</button>
</div>

    </div>
    </motion.div>
  );
};
  
export default LocationInfo;