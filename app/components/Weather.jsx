var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState :function(){
        return{
           isLoading: false
        }
    },      
    handleSearch : function(location){
        var that = this;
        this.isLoading = true;
        WeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading:false
            })
        },function(errorMessage){
            that.setState({
                isLoading: false
            })
            alert(errorMessage.message);
        })
    },
    render : function(){
        var {isLoading,temp,location} =  this.state;
        function renderMessage() {
            if(isLoading){
                return <h2>Fetching Weather ...</h2>
            }else if(temp&&location){
                return <WeatherMessage temp={temp} location={location}/>                
            }
            
        }
        return(
            <div>
            <h2>Weather</h2>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        )
    }
});
module.exports = Weather;