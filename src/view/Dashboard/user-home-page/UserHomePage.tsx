import React, { useContext, useState } from "react";
import { AuthContext } from "../../../App";
import { User } from "firebase";
import { IPlantData } from "../interfaces/PlantData";
import { CreatePlant } from "../create-plant/CreatePlant";
import { PrintPlants } from "../print-plants/PrintPlants";
import db from '../../../firebase';


export interface IUserHomePageProps {
    user: User;
}
export function UserHomePage(props: IUserHomePageProps) {
    // const authContext = useContext(AuthContext);

    const [plantIdCounter, setPlantIdCounter] = useState(1);
    
    const [allPlants, setAllPLants] = useState<IPlantData[]>([]);
    
    const [plantexist, setPlantExist] = useState(false);

    const [showCreatePlant, setShowCreatePlant] = useState(false);
    console.log(props.user?.uid);

    function addPlant(plant: IPlantData) {
        setPlantExist(true);
        setPlantIdCounter(plantIdCounter+1)
        plant.id = plantIdCounter;
        setAllPLants([...allPlants, plant]);
        console.log(db.storage())
    }
    


    return(
        <>

            <div>{ props.user?.email }</div>
            <button onClick={()=> {setShowCreatePlant(true)}}>Create a plant</button>
            { showCreatePlant &&
                
                    <CreatePlant 
                        setPlants= {addPlant}
                        showCreatePlant= {showCreatePlant}
                        closeCreatePlant= {setShowCreatePlant}
                        userId= {props.user?.uid}
                    ></CreatePlant>}
                <div className="plants">
                    {plantexist &&<PrintPlants
                        plants= {allPlants}
                    ></PrintPlants>}
                </div>
            
        </>
    )
}
