import React from "react";
import data from './data'
import Card from './Card'
import Nav from './Nav'
import './MainContent.css'

export default function MainContent() {
    const dataSet=data.map(x =>{
        return <Card
           key={x.title}
           title={x.title}
           location={x.location}
           GoogleMapURL={x.GoogleMapURL}
           startDate={x.startDate}
           endDate={x.endDate}
           description={x.description}
           ImageURL={x.ImageURL}
           />
    })
   return (
    < div>
        <Nav />
         <div className="main">
         {dataSet}
         </div>
    </div>
   )
}