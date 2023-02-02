import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import './Table.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Filter(props) {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ name: '', city: '', priceOffer: '' });
  const [sort, setSort] = useState({ from: '', to: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetch("https://localhost:7052/api/offers")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleSortChange = (name, value) => {
    setSort({ ...sort, [name]: value });
  }
  
  const handlePriceFilter = () => {
    const priceRange = `${sort.from}-${sort.to}`;
    setFilter({ ...filter, priceOffer: priceRange });
  }

  const pageNumbers = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
 

  const handleShowAll = () => {
    setFilter({ name: '', city: '', priceOffer: '' });
    setSort({ from: '', to: '' });
  };
   

  const filteredData = data.filter(item => {
    if (filter.name && !item.name.toLowerCase().includes(filter.name.toLowerCase())) {
      return false;
    }
    if (filter.city && !item.city.toLowerCase().includes(filter.city.toLowerCase())) {
      return false;
    }
    if (filter.priceOffer) {
      const [from, to] = filter.priceOffer.split("-");
      if(from <= item.priceOffer && item.priceOffer <= to ) return true;
      else return false;
    }
    return true;
  });

  


  const sortedData = filteredData.sort((a, b) => {
    if (sort.from && sort.to) {
      return a.priceOffer >= sort.from && a.priceOffer <= sort.to ? -1 : 1;
    }
    return a.priceOffer - b.priceOffer;

  });

  const currentData = sortedData.slice(startIndex, endIndex);


  
  


  return (
    < div className="table-wrapper" >
    <motion.div className="table-container"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, duration:0.5}}
     >
    
      <div className="filter-bar">
        <button onClick={() => handleFilterChange('name', 'Sprzątanie')}>Sprzątanie</button>
        <button onClick={() => handleFilterChange('name', 'Mycie okien')}>Mycie okien</button>
        <button onClick={() => handleFilterChange('name', 'Pranie dywanów')}>Pranie dywanów</button>
        <button onClick={handleShowAll}>Wszystkie</button>
      
      </div>
      <div className="filter-bar">
      
      <label>
         Cena Od:
          <input type="number" name="from" onChange={e => handleSortChange(e.target.name, e.target.value)} value={sort.from} />
        </label>
        <label>
          Do:
        <input type="number" name="to" onChange={e => handleSortChange(e.target.name, e.target.value)} value={sort.to} />
        <button onClick={handlePriceFilter}>Zastosuj</button>

        </label>
        </div>
      

       
          {currentData.map(item => (
            <motion.tr className="TableCard"  
            // key={item.id}
            whileHover={{scale:1.05}}>
         
            <td className="left"></td>
            <td className="middle">

                    <td className="message"><h4 className="job-type">{item.name}</h4><td><h5>{item.address.city}</h5></td>
                    </td>{item.description}<td><h5>CENA: {item.priceOffer}zł</h5></td></td>
                    <td className="rightSide">


                          <Link to={{
                          pathname: `/Profile/${item.userId}`,
                          state: { seekerId: item.userId}
                            }}>
                          <motion.button whileHover={{scale:1.5}}>
                            <i class="fa-solid fa-user"></i>
                          </motion.button>
                        </Link>
                    
                        <br></br>


                        <motion.a 
                      
                        whileHover={{scale:1.5}}>
                        <i class="fa-solid fa-comment"></i></motion.a>
                        <br></br>

                        <motion.a 
                        whileHover={{scale:1.5}}>
                        <i class="fa-solid fa-heart"></i></motion.a>
                    </td>
                     </motion.tr>          ))}

                        <div className="pagination-buttons-section">
                        <button className="pagination-button" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Poprzedni</button>
                        <button className="pagination-button"   disabled={currentPage === pageNumbers} onClick={() => setCurrentPage(currentPage + 1)}>Następny</button>
                        </div>
                       </motion.div>
                      </div>
  );
}

export default Filter;


