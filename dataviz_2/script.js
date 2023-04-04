d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.areaY(
        data.filter(d => d.nacionalidad == "EE.UU."),
      Plot.groupX({ y: "sum" }, { x: "anio_mision", y: "mision_hs" , curve: 'natural', opacity: 0.7, fill:'#884EA0'}),
      )
    ],
    style: {
      backgroundColor: "#FBFCFC",
      color: "#2E4053",
      fontFamily: "system-ui",
      fontSize: "14px",
      overflow: "visible"
    },
    //line: true,
    //padding:10, 
    margin:50, 
    height: 400,
    width: 550,
    x: {
      tickFormat: 'd',
      ticks: 9,
    },
    y: {
      ticks: 7,
      grid: true,
      domain:[0,36000]
    },
  })
  d3.select('#chart1').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.areaY(
        data.filter(d => d.nacionalidad == "U.S.S.R/Rusia"),
      Plot.groupX({ y: "sum" }, { x: "anio_mision", y: "mision_hs" , curve: 'natural', opacity: 0.7, fill:'#2980B9'}),
      )
    ],
    style: {
      backgroundColor: "#FBFCFC",
      color: "#2E4053",
      fontFamily: "system-ui",
      fontSize: "14px",
      overflow: "visible"
    },
    //line: true,
    //padding:10, 
    margin:50, 
    height: 400,
    width: 550,
    x: {
      tickFormat: 'd',
      ticks: 9,
    },
    y: {
      ticks: 7,
      grid: true,
      domain:[0,36000]
    },
  })
  d3.select('#chart2').append(() => chart)
})