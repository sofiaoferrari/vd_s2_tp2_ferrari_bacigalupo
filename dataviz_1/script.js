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
    grid: true,
    nice: true,
    zero: true,
    line: true,
    color: {
      legend: true,
    },
    width: 800,
    height: 200,
    r: { range: [0, 10] },
    facet: {
      data: data,
      x: 'ocupacion',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})