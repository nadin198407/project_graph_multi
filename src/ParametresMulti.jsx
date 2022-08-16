import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 400, height: 400, title: 'Parametr Graph', xaxis: {type: 'date'}
};

export default function ParametresMulti({ param = {}, record = []}) {

    const [plot, setPlot] = useState([])
    
    useEffect(() => {
      if(!record.length || !param.length) return;
      console.log(record);
      console.log(param);
      const newPlot = [];
      console.log(newPlot)
      param.forEach(({id, name}) => {
        newPlot.push(
           {
    
            y : record.filter(({parameter_id}) => id === parameter_id).map(({value}) => value),
            x: record.filter(({param_id}) => id === param_id).map(({create_epoch_tms}) => create_epoch_tms),
            
    
            type: 'scatter',
            mode: 'line',
            name
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
    