import { zones } from "../data/mockData"
import ZoneCard from "../components/ZoneCard"

function Dashboard(){

  return(

    <div style={{padding:"40px"}}>

      <h1>Smart Space Dashboard</h1>

      <input
        placeholder="ค้นหาสถานที่ เช่น BSC"
        style={{
          padding:"10px",
          width:"300px",
          marginBottom:"30px"
        }}
      />

      {zones.map(zone => (
        <ZoneCard key={zone.id} zone={zone}/>
      ))}

    </div>

  )
}

export default Dashboard