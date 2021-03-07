import React, {Component} from 'react'
import ReactDom from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken='pk.eyJ1IjoiYWRkZXIyMDYiLCJhIjoiY2tsdmtxeDB4MGczMDJucGIzcXF0eTU4dSJ9.VifXlFychfvat_BpLd1-Ew'

class Maps extends Component {

    constructor(props){
    super(props);
    this.state = {
        lng:10,
        lat: 80,
        zoom: 4
    }
}

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
    }
    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
            </div>
        )
    }
}    

export default Maps;