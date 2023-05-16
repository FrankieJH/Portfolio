import React from 'react';
import { Card } from 'antd';
import '../Styling/Spike.css';

const { Meta } = Card;

const Project = () => (
    <>
  <Card
    className='project_Style1'
    hoverable
    cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
  >
    <p>hello joshua</p>
    <Meta title="Spotify Project"  />
    <Meta description='this is the second meta' />
  </Card>
   <Card
   className='project_Style2'
   hoverable
   cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
 >
   <p>hello joshua</p>
   <Meta title="Spotify Project"  />
   <Meta description='this is the second meta' />
 </Card>
 <Card
   className='project_Style2'
   hoverable
   cover={<img alt="example" src= {require('../Assets/spotify.jpg')}  />}
 >
   <p>hello joshua</p>
   <Meta title="Spotify Project"  />
   <Meta description='this is the second meta' />
 </Card>
 </>
);

export default Project;