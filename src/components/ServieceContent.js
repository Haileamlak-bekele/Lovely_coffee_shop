import React from "react";
import './ServieceContentStyle.css';
import MyImage from "../image/Te recomendamos el café ideal según tus hábitos.png"
import MyImage2 from "../image/Premium Vector _ Male food delivery sits on scooter or motorcycle with box and pin location in back and all place on smartphone.png"

function ServieceContent(){
  return(
    <div className="container">
      <div className="first">
      <img src={MyImage} alt="first_img"/>
        <div className="cafe_serviece">
          <h3>Cafe Serviece</h3>
          <p>lorem ipsum whsajkdsl;xz Great use of imagery on the page. Definitely makes you want to sit in that passenger seat.
The video you can click into is great. Really brings some life to the page and shows off some of the tours.
They quickly call out their locations and also introduce you to the concept of a custom tour.
They end the page with a call to action to book and close the sales loop.
What we think could be improved:</p>

        </div>

      </div>
        
        <div className="second">
          <img src={MyImage2} alt="second_img"/>
          <div className="delivery_serviece">
            <h3>Delivery Serviece</h3>
            <p>lorem ipsum whsajkdsl;xz Great use of imagery on the page. Definitely makes you want to sit in that passenger seat.
The video you can click into is great. Really brings some life to the page and shows off some of the tours.
They quickly call out their locations and also introduce you to the concept of a custom tour.
They end the page with a call to action to book and close the sales loop.
What we think could be improved:</p>
          </div>

        </div>


      
    </div>
  )
}

export default ServieceContent