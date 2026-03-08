function ZoneCard({zone}) {

    const percent = (zone.available / zone.total) * 100
  
    let color = "green"
  
    if(percent < 40) color = "orange"
    if(percent < 10) color = "red"
  
    return (
      <div style={{
        border:"1px solid #eee",
        padding:"20px",
        borderRadius:"12px",
        marginBottom:"20px"
      }}>
  
        <h3>{zone.name}</h3>
  
        <h1>
          ว่าง {zone.available} / {zone.total}
        </h1>
  
        <div style={{
          background:"#eee",
          height:"10px",
          borderRadius:"10px"
        }}>
  
          <div style={{
            width: percent + "%",
            background: color,
            height:"10px",
            borderRadius:"10px"
          }}/>
  
        </div>
  
      </div>
    )
  }
  
  export default ZoneCard