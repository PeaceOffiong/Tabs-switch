import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [tabs, setTabs] = useState([]);
  
  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);

  const loadUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTabs(data);
      setLoading(false)
    } catch (error) {
      console.error("Api Not Functioning");
      setLoading(false);
    }
  }

  useEffect(() => {
   loadUrl();
  }, []);

  if (loading) {
    return <section className='section loading'>
      <h3>Loading...</h3></section>
  }
  
  const { id, order, company, dates, duties, title} = tabs[index];

  return <main className='section'>
    <div className='title'>
      <h2 className='loading'>Experience</h2>
      <div className='underline'></div>
    </div>
    <div className='job-center'>
      <div className='btn-container'>
        {tabs.map((item, value) => {
          return <button onClick={ () => setIndex(value)} className={`job-btn ${value === index && 'active-btn'}`} key={item.id}>{item.company}</button>
        })}
      </div>

      <article className='job-info'>
        <h3>{ title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty, index) => {
          return <div className='job-desc' key={index}>
            <div className='job-icon'><FaAngleDoubleRight />
            </div>
          <p>{ duty }</p>
          </div>
        })}
      </article>
    </div>
  </main>
}

export default App
