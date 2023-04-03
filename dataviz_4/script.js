  /* chart_12_bar_mark_stacked */
  d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        Plot.groupX({ y: "max" },
        {
        x: 'anio_mision',
        y: 'mision_hs',
        fill: 'ocupacion',
        sort: 'ocupacion', 
      })),
    ],
    style: {
      backgroundColor: "#877570",
      color: "#e5fffa",
      fontFamily: "system-ui",
      fontSize: "11px",
      overflow: "visible"
    },
    nice: true,
    line: true,
    color: {
      legend: true,
    },
    margin: 60,
    marginLeft: 60,
    width: 800,
  })
    d3.select('#chart').append(() => chart)
})
