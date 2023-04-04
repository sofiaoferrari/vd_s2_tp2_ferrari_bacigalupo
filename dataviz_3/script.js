d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY({ x: "sum" }, { x: "mision_hs", y: "nacionalidad", sort: {y:"x", reverse:true}, })
      )
    ],
    style: {
      backgroundColor: "#7e9a9a",
      color: "#e5fffa",
      fontFamily: "system-ui",
      fontSize: "14px",
      overflow: "visible"
    },
    margin:50, 
    height: 500,
    widht: 500,
    marginLeft: 200,
    y: {
      
    },
    x: {
      grid: true,
    }
  })
  d3.select('#chart').append(() => chart)
})