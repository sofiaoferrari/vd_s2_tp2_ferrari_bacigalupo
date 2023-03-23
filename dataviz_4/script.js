  /* chart_12_bar_mark_stacked */
  d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        fill: 'ocupacion',
        sort: 'ocupacion',
        title: d => d.country + '\n' + d.pop,
      }),
    ],
    marginLeft: 70,
    width: 600,
  })
    d3.select('#chart').append(() => chart)
})