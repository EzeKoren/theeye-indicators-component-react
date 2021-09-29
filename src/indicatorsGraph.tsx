import React from "react";
import Plot from "react-plotly.js";
import store from "./apis/store";

export default function Graph(props: any) {
    // if (props.id == "placeholder") debugger;
    const data = store.getState().indicators.indicators.find((obj: any) => {
        return obj.id == props.id;
    });

    if (data.title == "testo") console.log(data)
    let plot;
    if (data?.value.data) {
        plot = <Plot
            data={ data.value.data }
            layout={{
                width: 320,
                height: 240,
                title: data !== undefined ? data.title : "Placeholder",
            }}
        />
    } else if (data?.type == "progress") {
        plot = <Plot
            data={[{
                value: data.value,
                type: "indicator",
                number: { suffix: "%" },
                mode: "gauge+number",
                gauge: { axis: { range: [null, 100], visible: false }}
            }]}
            layout={{
                width: 320,
                height: 240,
                title: data !== undefined ? data.title : "Placeholder",
            }}
        />
    } else if (data?.type == "number" || data?.type == "counter") {
        plot = <Plot
            data={[{
                type: "indicator",
                mode: "number",
                value: data.value,
            }]}
            layout={{
                width: 320,
                height: 240,
                title: data !== undefined ? data.title : "Placeholder",
            }}
        />
    } else if (data?.type == "text") { // WIP: Falta el diseño
        plot = <div className={ data.type } style={{
            position: 'relative',
            display: 'inline-block',
            width: 320, 
            height: 240,
            fontSize: '12px'
        }}>
            <div className="title" style={{
                fontSize: '1.2em',
                textAlign: 'center'
            }}>{ data.title }</div>
            <div className="value">{ data.value }</div>
        </div>
    } else {
        plot = <div className="none"></div>
    }
    return plot
}
