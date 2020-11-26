import React, { useState } from 'react';
import { IPlantData } from '../interfaces/PlantData';
import { IEntry } from '../interfaces/Entry';

export interface IEntryInputData {
    title: string
    text: string
    img: string

}

export interface ICreateEntryProps {
  addEntry: (entryData: IEntryInputData) => void;
  plantId: number;
}



export function CreateEntry(props: ICreateEntryProps) {

    const[entryData, setEntryData]= useState<IEntryInputData>({
        title: '',
        text: '',
        img: ''
    })



    function updateEntryData(
        e: React.ChangeEvent<HTMLInputElement>, 
        id: keyof IEntryInputData) {
        setEntryData({ ...entryData, [id]: e.target.value});
    }

    function saveEntry() {
        
        console.log(entryData);
        props.addEntry(entryData);
        entryData.img='';
        entryData.title='';
        entryData.text='';
        
    }


    return(
        <>
            <input 
                value={entryData.title}
                type="text" 
                placeholder="title"
                onChange={e=>{updateEntryData(e, 'title')}}
            />
            <input 
                value={entryData.text}
                type="text" 
                placeholder="text"
                onChange={e=>{updateEntryData(e, 'text')}}
            />
            <input 
                value={entryData.img}
                type="text" 
                placeholder="img"
                onChange={e=>{updateEntryData(e, 'img')}}
            />

            <button onClick={saveEntry}>create</button>
        </>
    )
}