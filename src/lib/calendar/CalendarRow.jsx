import React from 'react';
import '../style/DateTimeRange.css'
import Cell from './Cell'
class CalendarRow extends React.Component {
    generateCells(){
        let cells = [];
        let daysSize = this.props.rowDays.length;
        for(let i = 0; i < daysSize; i++){
            cells.push(<Cell 
                key={i} 
                cellDay={this.props.rowDays[i]}
                date={this.props.date}
                otherDate={this.props.otherDate}
            />);
        }
        return cells;
    }


    render(){
        let cells = this.generateCells();
        return(
            <div className="calendarGrid">
                {cells}
            </div>
        );
    }
}
export default CalendarRow