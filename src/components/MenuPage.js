import React from "react";
import './menuStyle.css'
import image1 from '../image/spoon2.png'
import image2 from '../image/bila.png'
import image3 from '../image/coffee latte cup.png'
function MenuPage(){
  return(
    <div>
      <div className="container1">
        <h1>Our Menus</h1>
        <div className="insCont">
        <img src={image1} alt="spoon_image"/>

        <div className="menuList">
          <div className="insideMenuList">
          <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
         <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
         <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
          </div>
          <div className="insideMenuList">
          <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
         <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
         <div className="menu1">
          <img src={image3} alt="coffee1"/>
          <h5>coffee1</h5>
          <p><i>it is from kefa</i></p>
          <p><b>price: 20 ETB</b></p>
          <button className="button_deliver" type="button">Deliver Here!</button>
         </div>
          </div>
         
         
        </div>

        </div>
        {/* <hr/> */}
        <div className="other">
          <div className="menu2">
          <div className="food">
          <h2>Foods</h2>
            <div className="foodList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="foodList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="foodList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="foodList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="foodList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            
            
            <button className="button_deliver" type="button">Order Here!</button>
          </div>
          <div className="juice">
          <h2>Juices</h2>
          <div className="juiceList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="juiceList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="juiceList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="juiceList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <div className="juiceList">
            <input type="checkbox"/><label><b>salad</b><div>it is preparede from different gradients</div><div className="price">price:30ETB</div></label>
            </div>
            <button className="button_deliver" type="button">Order Here!</button>
          </div>
          </div>
         
          <img src={image2} alt="bila_image"/>
        </div>
        <button className="button_deliver" type="button">More Menu</button>
       
      </div>
    </div>
  )
}

export default MenuPage