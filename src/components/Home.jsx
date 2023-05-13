import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className="home" id="home">
        <main>
      <h1>DigiNexus</h1>
      <p>soluiton to all youtr problem</p>


        </main>


    </div>
    <div className="home2">
      <img src ={vg} alt ="Graphics"/>
      <div>

     <p>
      we are your one and only solution to the problems 
      you face every day.
      we are leading techcompany whose aim is to increase the problems 
      solving ability in children.



     </p>


      </div>



        
    </div>

    <div className="home3" id ="about">
     <div>

      <h1>who we are </h1>
      <p>
        
       In today's world, we face a wide range of problems every day. From personal problems to global issues,
        it can be challenging to find solutions that work. That is where our leading tech company comes in.
         We are your one and only solution to the problems you face every day.
         At our company, we understand the challenges that people face and are committed to using technology
          to increase problem-solving abilities. Our goal is to empower children with the skills they need to
           become problem-solvers and leaders of tomorrow.
      </p>



     </div>



    </div>
    <div className="home4" id ="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div 
          style ={{
            animationDelay:"0.3s",
          }}
          >
            <AiFillGoogleCircle/>
            <p>Google</p>


          </div>

          <div 
          style ={{
            animationDelay:"0.5s",
          }}
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>


          </div>

          <div 
          style ={{
            animationDelay:"0.7s",
          }}
          >
            <AiFillYoutube/>
            <p>Youtube</p>


          </div>

          <div 
          style ={{
            animationDelay:"0.1s",
          }}
          >
            <AiFillInstagram/>
            <p>Instagram</p>


          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;