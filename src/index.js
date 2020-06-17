import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

import "./styles.css";
import "./network.css";

/*
function getNode(id, label) {
    return ({
        id: id,
         label: label,
         color: '#d1d1d1',
         shape: 'dot',
         borderWidth: 2,
         size: 30
    })
}
*/

function fetchGraph() {
    const graph = {
        nodes: [
            { id: 1, label: "bus 1", color: '#d1d1d1', shape: 'dot', borderWidth: 2, size: 30 },
            { id: 2, label: "bus 2", color: '#d1d1d1', shape: 'dot', borderWidth: 2, size: 30 },
            { id: 3, label: "grid 1", color: '#d1d1d1', shape: 'dot', borderWidth: 2, size: 30 },
            { id: 4, label: "feeder 1", color: '#d1d1d1', shape: 'dot', borderWidth: 2, size: 30 },
            { id: 5, label: "ess 1", color: '#d1d1d1', shape: 'dot', borderWidth: 2, size: 30 }
        ], 
        edges: [
            { from: 1, to: 2 },
            { from: 2, to: 1 },
            { from: 3, to: 1 },
            { from: 1, to: 4 },
            { from: 5, to: 2 }
        ]
    };

    return graph
}

class GraphView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            network: null,
            options: {
                layout: {
                    hierarchical: false
                },
                interaction: {
                    dragView: false,
                },
                edges: {
                    color: "#000000",
                    width: 2
                },
                height: "500px"
            },
            events: {
                select: function(event) {
                    var {nodes, edges} = event;
                }
            },
            timeout: 
                setInterval(() => {
                    console.log('timeout')
                    this.state.network.redraw()
                }, 1000)
        };
    }

    render() {
        return (
            <Graph
                graph={this.props.graph}
                options={this.state.options}
                events={this.state.events}
                getNetwork={network => this.setState({network})}
            />
        )
    }
}

class App extends React.Component {

    

    render() {
        return (
            <div className="Network">
                <GraphView graph={fetchGraph()}/>
            </div>
        )
    };
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);