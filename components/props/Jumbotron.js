//@ts-check

import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
export default function jumbotron(props){
    return (
         <div>
             <div  className="position-relative overflow-hidden p-3 p-md-5 text-center bg-info">
                 <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-bold">{props.judul}</h1>
                <p className="lead fst-italic">{props.isi}</p>
             </div>
         </div>
         </div>
    )
}
