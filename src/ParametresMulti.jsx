import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 600, height: 600, title: 'Parametr Graph', xaxis: {type: 'date'}
};

export default function ParametresMulti({ param = [{}], record = []}) {

    const [plot, setPlot] = useState([])
    
    useEffect(() => {
      if(!record.length || !param.length) return;
      console.log(record);
      console.log(param);
      const newPlot = [];
      param.forEach((id, name) => {
        newPlot.push(
           {
            x: record.filter(({sensor_id}) => id.id === sensor_id).map(({create_epoch_tms}) => create_epoch_tms),
            y: record.filter(({sensor_id}) => id.id === sensor_id).map(({value}) => value),
            type: 'scatter',
            mode: 'line',
            name: id.name
           }
          );
          
       });
      console.log(newPlot);
      setPlot(newPlot);
      console.log(plot);
    
    }, [param, record])
    
    
    
    
    
        return (
          <Plot
          data={plot}
          layout={layout} />
        );
      }
    