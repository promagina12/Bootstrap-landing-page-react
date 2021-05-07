import React from 'react'
import "./Card.scss"
import CardImages from "../../components/CardImages/CardImages"



export default function Card(props) {
    return (
        <div className="card">
        <CardImages src={props.image} label={props.label}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ultrices accumsan ornare. Phasellus tristique
              </p>
            </div>
    )
}
