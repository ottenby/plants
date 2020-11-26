import React, { useState, useEffect } from "react";
import { IPlantData } from "../interfaces/PlantData";
import { ShowPlantDetails } from "../plant-details/PlantDetails";
import { CreateEntry, IEntryInputData } from "../create-entry/CreateEntry";
import { IEntry } from "../interfaces/Entry";

export interface IPrintPlantsProps {
  plants: IPlantData[];
}

export function PrintPlants(props: IPrintPlantsProps) {
  const [userClicked, setUserClicked] = useState(false);
  const [clickedPlant, setClickedPlant] = useState(0);
  const [showCreateEntry, setShowCreateEntry] = useState(false);
  const [allEntrys, setAllEntrys] = useState<IEntry[]>([]);

  let plantToGetEntry: IPlantData | {}
  useEffect(() => {
    plantToGetEntry = props.plants.filter(plant=> {
      if (plant.id === clickedPlant) {

        console.log(plant);
        plant.entrys = allEntrys;
        console.log(plantToGetEntry);
      } 
    })
    
  }, [allEntrys]);

  function updateInfo(id: number) {
    setClickedPlant(id);
    setUserClicked(!userClicked);
  }
  function updateShowCreateEntry() {
    setShowCreateEntry(!showCreateEntry);
  }

  

  let plants = props.plants.map(plant => {
    return (
      <div>
        <h3
          onClick={() => {
            updateInfo(plant.id);
          }}
        >
          {plant.name}
        </h3>

      </div>
    );
  });

  function addEntry(entry: IEntryInputData) {
    console.log(entry);
    const newEntry: IEntry = {
      title: entry.title,
      text: entry.text,
      img: entry.img,
      id: (Math.random()*10).toString(),
      date: new Date(),
      plantId: clickedPlant
    };
    console.log(clickedPlant);
    setAllEntrys([...allEntrys, newEntry]);


  }

  

 


  return (
    <>
      <div>{plants}</div>

      {userClicked && (
        <ShowPlantDetails
          plantId={clickedPlant}
          allPLants={props.plants}
          updateShowCreateEntry = {updateShowCreateEntry}
        ></ShowPlantDetails>
      )}

      {showCreateEntry && (
        <CreateEntry 
          addEntry={addEntry} 
          plantId={clickedPlant}
          ></CreateEntry>
      )}
    </>
  );
}
