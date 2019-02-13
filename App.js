
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, AppRegistry} from 'react-native';
import CircularProgress from './CircularProgress'
AppRegistry.registerComponent('CircularProgress', () => CircularProgress);

let global = {
    barwidth : (Dimensions.get('window').width)/6,
    windowHeight: Dimensions.get('window').height,
    windowWidth: Dimensions.get('window').width,
    month: new Date().getMonth() + 1,
    monthHeight: ((new Date().getMonth() + 1)/12) * (Dimensions.get('window').height),
    day: new Date().getDay(),
    dayHeight: ((new Date().getDay())/31) * (Dimensions.get('window').height),
    hour: new Date().getHours(),
    hourHeight: ((new Date().getHours())/24) * (Dimensions.get('window').height),
    minute: new Date().getMinutes(),
    minuteHeight: ((new Date().getMinutes())/60) * (Dimensions.get('window').height),
    second: new Date().getSeconds(),
    secondHeight: ((new Date().getSeconds())/60) * (Dimensions.get('window').height)
};

type Props = {};
export default class Clock extends Component {
    constructor() {
        super();
        this.state = {currentTime: null, currentMonth:null, currentDayOfWeek: null, currentHour: null, currentMinute: null, currentSecond: null, currentAMPM: null}
        this.daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
    }
    componentWillMount() {
        this.getCurrentTime();
    }
    componentDidMount()
    {   
        this.timer = setInterval(() =>
        {
        this.getCurrentTime();
        }, 1000);
    }
    getCurrentTime = () =>
{   let month = new Date().getMonth();
    let date = new Date().getDate();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'PM';
 
    if( minutes < 10 )
    {
        minutes = '0' + minutes;
    }
 
    if( seconds < 10 )
    {
        seconds = '0' + seconds;
    }
 
    if( hour > 12 )
    {
        hour = hour - 12;
    }
 
    if( hour == 0 )
    {
        hour = 12;
    }
 
    if( new Date().getHours() < 12 )
    {
        am_pm = 'AM';
    }
 
    this.setState({ currentTime: hour + ':' + minutes , currentHour: hour, currentMinute: minutes, currentSecond: seconds, currentMonth: month + 1, currentAMPM: am_pm  });
    
    this.daysArray.map(( item, key ) =>
    {
        if( key == new Date().getDay() )
        {
            this.setState({ currentDayOfWeek: item.toUpperCase(), currentDate: date });
        }
    })        
}
    
  render() {
    return (
      // Try setting `flexDirection` to `column`.
//      <View style={{flex: 1, flexDirection: 'row'}}>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: global.monthHeight, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'powderblue'}}>
//        <Text>{global.month}</Text>
//        </TouchableOpacity>
//        </View>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: global.dayHeight, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'rebeccapurple'}}>
//        <Text>{global.day}</Text>
//        </TouchableOpacity>
//        </View>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: global.hourHeight, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'powderblue'}}>
//        <Text>{global.hour}</Text>
//        </TouchableOpacity>
//        </View>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: global.minuteHeight, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'rebeccapurple'}}>
//        <Text>{global.minute}</Text>
//        </TouchableOpacity>
//        </View>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: global.secondHeight, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'powderblue'}}>
//        <Text>{global.second}</Text>
//        </TouchableOpacity>
//        </View>
//        <View style = {{flexDirection: 'column'}}>
//        <View style = {{width: global.barwidth, height: 10, backgroundColor: 'gray'}}/>
//        <TouchableOpacity style={{ flex: 1, width: global.barwidth, backgroundColor: 'rebeccapurple'}}>
//        <Text>{global.hour}</Text>
//        </TouchableOpacity>
//        </View>
//      </View>
        
        <View style={{flex: 1, flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#4a4a4a'}}>
        {/*<CircularProgress ringColor={'#7fffd4'} radius={60} percent={(this.state.currentMonth / 12) * 100}/>*/}
        {/*<CircularProgress ringColor={'red'} radius={80} percent={(this.state.currentDate / 31) * 100}/>*/}
        <CircularProgress ringColor={'black'} ringBgColor={'black'} radius={130} percent={0}/>
        <CircularProgress ringColor={'#f55837'} radius={125}  percent={(this.state.currentMinute / 60) * 100}/>
        <CircularProgress ringColor={'black'} ringBgColor={'black'}  radius={100} percent={0}/>
        <CircularProgress ringColor={'#f5aa37'} radius={98} percent={(this.state.currentHour / 12) * 100}/>
        <CircularProgress ringColor={'black'} ringBgColor={'black'} radius={50} percent={0} bgRingWidth={70}/>
            {/*<CircularProgress ringColor={'rebeccapurple'} radius={140} percent={(this.state.currentSecond / 60) * 100}/>*/}
        
        <View style={{height:100, width:100, radius:100, color:'blue', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>{this.state.currentDayOfWeek}</Text>
        <Text style={{color:'white', fontSize:40, fontWeight:'bold'}}>{this.state.currentTime}</Text>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{this.state.currentAMPM}</Text>
        </View>
        </View>
        
        
        
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    circle: {
  height: 30,
  width: 30,
  borderRadius: 15,
color: 'blue',
        alignItems: 'center'
}
});
