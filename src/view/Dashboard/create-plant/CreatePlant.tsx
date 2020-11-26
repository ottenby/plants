import React, { useState, Dispatch, SetStateAction } from 'react';
import { IPlantData } from '../interfaces/PlantData';


export interface ICreatePlantProps {
    setPlants: (plantData: IPlantData) => void;
    // closeCreatePlant: (<SetStateAction<boolean>>) => void;
    showCreatePlant: boolean;
    closeCreatePlant: Dispatch<SetStateAction<boolean>>
    userId: string | undefined;
}



export function CreatePlant(props: ICreatePlantProps) {

    const[plantData, setPlantData]= useState<IPlantData>({
        name:'',
        height:0,
        species:'',
        id:0,
        months: 0,
        userId: '',
        entrys: []

    })



    function updatePlantData(
        e: React.ChangeEvent<HTMLInputElement>, 
        id: keyof IPlantData) {
        setPlantData({ ...plantData, [id]: e.target.value});
    }

    function savePlant() {
        // plantData.userId = props.userId | undefined
        console.log(plantData);
        props.setPlants(plantData);
        props.closeCreatePlant(false);
        clearForm()
    }
    function clearForm() {
        // plantData.name='';
        // plantData.species='';
        // plantData.height=0;
        // plantData.months=0;
    }


    return(
        <>
        <p>Create a plant</p>
            <input 
                value={plantData.name}
                type="text" 
                placeholder="Name of plant"
                onChange={e=>{updatePlantData(e, 'name')}}
            />
            <input 
                value={plantData.species}
                type="text" 
                placeholder="Species"
                onChange={e=>{updatePlantData(e, 'species')}}
            />
            <input 
                value={plantData.height}
                type="number" 
                placeholder="height in cm"
                onChange={e=>{updatePlantData(e, 'height')}}
            />
            <input 
                value={plantData.months}
                type="number" 
                placeholder="age in months"
                onChange={e=>{updatePlantData(e, 'months')}}
            />
            <button onClick={savePlant}>create</button>
        </>
    )
}