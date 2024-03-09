import { useEffect, useContext } from 'react';
import './Submain.css';
import SubmainContext from './SubmainContext.jsx'

const Submain = () => {
    const { mugData, pic } = useContext(SubmainContext);

    useEffect(() => {
        fetchMugs().then(setMugData).catch(console.error);
        fetchPic().then(setPic).catch(console.error);
    }, []);

    return (
        <section className='submain-section'>
            <div className='submain-text-container'>
                <h2 className='submain-content-heading'>{mugData.title}</h2>
                <div className='header-and-desc-container'>
                    <div className='header-and-desc'>
                        <div className='header'>{mugData.header1}</div>
                        <p className='desc'>{mugData.desc1}</p>
                    </div>
                    <div className='header-and-desc'>
                        <div className='header'>{mugData.header2}</div>
                        <p className='desc'>{mugData.desc2}</p>
                    </div>
                    <div className='header-and-desc'>
                        <div className='header'>{mugData.header3}</div>
                        <p className='desc'>{mugData.desc3}</p>
                    </div>
                </div>
            </div>
            <div className='submain-pic-container'>
                <img src={pic} alt='Fellow Mug Pic' className='submain-pic'></img>
            </div>
        </section>
    )
}

const fetchMugs = () => {
    return fetch("https://fec-project-tjyl.onrender.com/mugs/1") 
      .then((response) => response.json()) 
      .then((data) => {
        return {
          title: data.mug_bottom_description_title,
          header1: data.mug_bottom_header_1,
          header2: data.mug_bottom_header_2,
          header3: data.mug_bottom_header_3,
          desc1: data.mug_bottom_description_1,
          desc2: data.mug_bottom_description_2,
          desc3: data.mug_bottom_description_3
        };
      })
      .catch((error) => {
        console.error("Error fetching mugs:", error);
        throw error;
      }); 
};

const fetchPic = () => {
    return fetch("https://fec-project-tjyl.onrender.com/mug_pics/1")
    .then((response) => response.json)
    .then((data) => {
        return {pic: data.mug_pic_extra_2}
    })
    .catch((error)=>{
        throw(error);
    })
};

export default Submain;