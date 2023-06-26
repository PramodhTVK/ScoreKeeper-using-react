import { useState } from "react";

export default function ScoreKeeper({numPlayers = 3},{targetScore = 5}){
    const players = new Array(numPlayers).fill(0);
    const [scores, setScores] = useState(players);

    function incrementScore(index){
       const newArray =  [...scores]
       newArray[index]+=1;
       setScores(newArray);
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score,index)=>{
                    return <li key={index}>Player{index+1}:{score}
                    <button onClick={()=>incrementScore(index)}>+1</button></li>
                })}
            </ul>
        </div>
    )

}