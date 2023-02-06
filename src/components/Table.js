
import axios from "axios";
import './Table.css'
import React, { useEffect,useState } from "react";
import {Button} from './Button';
import {motion} from 'framer-motion'
import { lightGreen } from "@mui/material/colors";







const Table = () => {
    
    

    

    const[offers,showOffers]=useState({details:[]})
    useEffect(()=>{
        const fetchOffers = async ()=> {
            const{data}= await axios("https://localhost:7026/api/offers");
            showOffers({details:data})
            console.log(data)
        }
        fetchOffers()
    },[showOffers])
    return (
        <div class="table-wrapper">
        <motion.div className="table-container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:0.5}}
         >
        <div className="filter-bar">
<button className="filter-button">Sprzątanie</button>
<button className="filter-button">Czyszczenie dywanów</button>
<button className="filter-button">Mycie okien</button>



        </div>
        {
            offers.details && offers.details.map((item)=>(
                
            <motion.tr className="TableCard"  key={item.id}
            whileHover={{scale:1.05}}>
         
            <td className="left"></td>
            <td className="middle">
            
                    <td className="message"><h4 className="job-type">{item.name}</h4>
                    </td>{item.message}<td><h5>CENA: {item.priceOffer}{item.className} zł</h5></td></td>
            <td className="rightSide">


                        <motion.a href="/Profile"
                        whileHover={{scale:1.5}}>
                        <i class="fa-solid fa-user"></i></motion.a>

                        <br></br>
                        <motion.a href="/Profile"
                      
                        whileHover={{scale:1.5}}>
                        <i class="fa-solid fa-comment"></i></motion.a>
                        <br></br>

                        <motion.a href="/Profile"
                        whileHover={{scale:1.5}}>
                        <i class="fa-solid fa-heart"></i></motion.a>


                        
                    
                    </td>

         </motion.tr>
            ))
        }

        </motion.div>
        </div>
    )
}
export default Table;