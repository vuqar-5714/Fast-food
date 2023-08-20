import React from 'react'
import { Fragment } from 'react'
import Navbar from "./Navbar/navbar"
import Main from "./Main/main"
import Lunch from "./Lunch/lunch"
import Dinner from "./Dinner/dinner"
import "./App.css" 
import break1 from "./assets/breakfast1.jpg";
import break2 from "./assets/breakfast2.jpg";
import break3 from "./assets/breakfast3.jpg";
import lunch1 from "./assets/lunch1.jpg"
import lunch2 from "./assets/lunch2.jpg"
import lunch3 from "./assets/lunch3.jpg"
import dinner1 from "./assets/dinner1.jpg"
import dinner2 from "./assets/dinner2.jpg"
import dinner3 from "./assets/dinner3.jpg"
const App = () => {

const data  = [{src:break1,name:"Tasty Dish 1",price:"10$"},
{src:break2,name:"Tasty Dish 1",price:"10$"},
{src:break3,name:"Tasty Dish 1",price:"10$"},
]

const dinner = [
  {src:dinner1,name:"Tasty Dish 1",price:"10$"},
{src:dinner2,name:"Tasty Dish 1",price:"10$"},
{src:dinner3,name:"Tasty Dish 1",price:"10$"},
]

const lunch = [
  {src:lunch1,name:"Tasty Dish 1",price:"10$"},
{src:lunch2,name:"Tasty Dish 1",price:"10$"},
{src:lunch3,name:"Tasty Dish 1",price:"10$"}
]

  return (
    <Fragment>
     <Navbar />
     <h1>Menu</h1>
     <div className='my-project'>
     <Main data={data} />
     <Lunch lunch={lunch} />
     <Dinner dinner={dinner} />
     </div>
    </Fragment>
  )
}

export default App
