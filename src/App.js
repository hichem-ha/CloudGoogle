import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';


class App extends Component {
  render () { 
  return (
    <div className="App">
        <h1 style={{width:"100%",display:"flex",justifyContent:"center"}}> GOOGLE MAPS WITH REACT </h1>
        <div>
        <Map google={this.props.google} zoom={15}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>
  
        </div>
    </div>
  );
}}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDDEnDhn1ILEYyetbsWXaemv_-cKe04yLA")
})(App);
