import React from 'react';
import { Card } from 'antd';
import '../Styling/Spike.css';
import '../Styling/FontStyles.css';

const { Meta } = Card;

const Project = () => (
    <>
    <div className='card_Container'>
  <Card
    className='project_Style1'
    hoverable
    cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
  >
    <div className='project_Style3'>0 <span id="project_Style3">0</span></div>
    <div className='container Font_style_3'>
    <h2>Project Name Here</h2>
    <p>A web application that allows users to create and share 
        custom workout plans, featuring an intuitive user interface 
        and interactive design.</p>
        </div>
  </Card>


   <Card
   className='project_Style2'
   hoverable
   cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
 >
    <div className='container2 Font_style_4'>
    <h2>Project Name Here</h2>
    <div className='project_Style4'>0 <span id="project_Style4">1</span></div>
    <p>A web application that allows users to create and share 
        custom workout plans, featuring an intuitive user interface 
        and interactive design.</p>
        </div>
 </Card>
 <Card
   className='project_Style2'
   hoverable
   cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
 >
       <div className='container2 Font_style_4'>
    <h2>Project Name Here</h2>
    <div className='project_Style4'>0 <span id="project_Style4">2</span></div>
    <p>A web application that allows users to create and share 
        custom workout plans, featuring an intuitive user interface 
        and interactive design.</p>
        </div>
 </Card>

 <Card
   className='project_Style1'
   hoverable
   cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
 >
      <div className='project_Style3'>0 <span id="project_Style3">3</span></div>
    <div className='container Font_style_3'>
    <h2>Project Name Here</h2>
    <p>A web application that allows users to create and share 
        custom workout plans, featuring an intuitive user interface 
        and interactive design.</p>
        </div>
 </Card>


 </div>


 </>
);

export default Project;