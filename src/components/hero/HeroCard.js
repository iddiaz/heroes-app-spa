import { Link } from "react-router-dom";

// const imagePath = `/assets/heroes/${id}.jpg`;
import { heroImages } from "../../helpers/heroImages";

export const HeroCard = ( {
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
} ) => {



   return (     

      <div className="col animate__animated animate__fadeIn">
         <div className="card">
            <div className="row no-gutters">
               <div className="col-4">
                  {/* carga imagenes desde la carpeta public
                  <img src={imagePath} className="card-img" alt={superhero} /> */}
                  <img src={ heroImages(`./${id}.jpg`) } className="card-img" alt={superhero} />
               </div>
               <div className="col-8">
                  <div className="card-body">
                     <div className="cart-title"> {superhero} </div>
                     <p className="cart-text"> {alter_ego} </p>
                  </div>

                  {
                     (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                  }

                  <p className="card-text">
                     <small className="text-muted">{first_appearance}</small>
                  </p>

                  <Link to={`/hero/${id}`} >ver más</Link>
               </div>

            </div>
           
         </div>
      </div>
    
   )
}
