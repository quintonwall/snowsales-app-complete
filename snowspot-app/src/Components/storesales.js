import { SearchEmbed } from "@thoughtspot/visual-embed-sdk/react";

export default function StoreSales() {
   return (
       <div>
           <h1>Top 10 Stores</h1>
           <SearchEmbed frameParams={{height: "80vw"}}
                       collapseDataSources={true}
                       answerId={"892f557d-4485-4215-9113-8f0ad6fc690b"}/>
       </div>    
   );
}