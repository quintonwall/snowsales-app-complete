import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react"


export default function Liveboard() {
   return (
       <div>
           <h1>Liveboard</h1>
           <LiveboardEmbed frameParams={{height: "80vw"}} 
                liveboardId={"19a8be4f-14c0-4c07-b4ed-7f0fcd09880f"} />
                
       </div>    
   );
}