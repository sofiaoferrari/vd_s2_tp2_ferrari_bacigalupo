d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY({ x: "sum" }, { x: "mision_hs", y: "nacionalidad", sort: {y:"x", reverse:true}, })
      )
    ],
    style: {
      backgroundColor: "#0E6251",
      color: "#e5fffa",
      fontFamily: "system-ui",
      fontSize: "14px",
      overflow: "visible"
    },
    width: 1000,
    height: 600,
    marginLeft: 200,
    marginTop: 60,
    marginBottom: 60,
    line: true,

    x: {
      grid: true,
      ticks: 6,
    }
  })
  d3.select('#chart').append(() => chart)
})