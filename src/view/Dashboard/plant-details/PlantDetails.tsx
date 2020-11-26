import React, { useState, useEffect } from 'react';
import { IPlantData } from '../interfaces/PlantData';
import { IEntry } from '../interfaces/Entry';



export interface IShowPlantDetailsProps {
    plantId: number;
    allPLants: IPlantData[];
    updateShowCreateEntry: () => void;
}
export function ShowPlantDetails(props: IShowPlantDetailsProps) {

    console.log(props.plantId)

    const [clickedPlant, setClickedPLant]= useState({
        name: '',
        species: '',
        height: 0,
        id: 0,
        months: 0,
        entrys: {}
    })


    useEffect(() => {
        props.allPLants.forEach(plant => {
            if(plant.id === props.plantId) {
                setClickedPLant(plant);
            }
        });
    }, [props.plantId]);

    let entrys: IEntry[] = [];
    


    return(
        <>
            
            <div>
                <p>namn:{ clickedPlant.name }</p>
                <p>art:{ clickedPlant.species }</p>
                <p>höjd:{ clickedPlant.height } cm</p>
                <p>månader:{ clickedPlant.months }</p>
                <p>id:{ clickedPlant.id }</p>
                <div>inlägg {  }</div>
                <button
                    onClick={props.updateShowCreateEntry}>
                Skapa inlägg
                </button>
            </div>
        </>
    )


}