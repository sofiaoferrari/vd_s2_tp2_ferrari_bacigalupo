let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'mision_hs',
        fill: 'genero',
        fillOpacity: 0.6,
        r: 'mision_hs',
        title: 'genero',
      }),
      Plot.frame(),
    ],
    style: {
      backgroundColor: "#7e9a9a",
      color: "#e5fffa",
      fontFamily: "system-ui",
      fontSize: "11px",
      overflow: "visible"
    },
    grid: true,
    nice: true,
    line: true,
    color: {
      legend: true,
    },
    width: 1300,
    height: 300,
    marginLeft: 60,
    marginTop: 60,
    r: { range: [0, 22] },
    facet: {
      data: data,
      x: 'ocupacion',
    },
    x: { ticks: 4},
    y: { ticks: 6},

  })
  d3.select('#chart').append(() => chart)
})