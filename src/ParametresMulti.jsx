import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 400, height: 400, title: 'Parametr Graph', xaxis: {type: 'date'}
};

export default function ParametresMulti({ param = [], record = []}) {

    const [plot, setPlot] = useState([])
    
    useEffect(() => {
      if(!record.length || !param.length) return;
      console.log(record);
      console.log(param);
      const newPlot = [];
      console.log(newPlot)
      param.forEach((id) => {
        newPlot.push(
           {
    
            y : record.filter(({sensor_id}) => id == sensor_id).map(({value}) => value),
            x: record.filter(({sensor_id}) => id == sensor_id).map(({create_epoch_tms}) => create_epoch_tms),
            
    
            type: 'scatter',
            mode: 'line',
           }
          );
          
       });
      console.log(newPlot);
      console.log(param);
      setPlot(newPlot);
    
    }, [param, record])
    
    
    
    
    
        return (
          <Plot
          data={plot}
          layout={layout} />
        );
      }
    