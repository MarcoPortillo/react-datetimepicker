import React from 'react';
import DateTimeRangeContainer from './lib/index'
import moment from "moment"

class Wrapper extends React.Component {

    constructor(props){
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        // start = moment(start).subtract(34, "months").subtract(1, "seconds");
        // end = moment(start).add(5, "days").add();
        this.state = {
            start : start,
            end : end
        }

        this.onClick = this.onClick.bind(this);
        this.applyCallback = this.applyCallback.bind(this);
    }

    applyCallback(startDate, endDate){
        // console.log("Apply Callback");
        // console.log(startDate.format("DD-MM-YYYY HH:mm"));
        // console.log(endDate.format("DD-MM-YYYY HH:mm"));
        this.setState(
            {
                start: startDate,
                end : endDate
            }
        )

      if(this.props.onChange) {
        this.props.onChange({
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        })
      }
    }

    onClick(){
        let newStart = moment(this.state.start).subtract(3, "days");
        // console.log("On Click Callback");
        // console.log(newStart.format("DD-MM-YYYY HH:mm"));
        this.setState({start : newStart})
    }

    renderContainerNoGrid(ranges, local, maxDate){
        return(
            <div>
                <DateTimeRangeContainer
                    ranges={ranges}
                    start={this.state.start}
                    end={this.state.end}
                    local={local}
                    maxDate={maxDate}
                    applyCallback={this.applyCallback}
                >
                    <input
                    id="formControlsTextB"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                    />
                </DateTimeRangeContainer>
            </div>
        )
    }

    renderGrid(ranges, local, maxDate){
        return(
              <DateTimeRangeContainer
                  ranges={ranges}
                  start={this.state.start}
                  end={this.state.end}
                  local={local}
                  applyCallback={this.applyCallback}
              >
                  <input
                  id="formControlsTextB"
                  type="text"
                  label="Text"
                  placeholder="Enter text"
                  />
              </DateTimeRangeContainer>
        )
    }

     render(){
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        let ranges = {
            "Today": [moment(start), moment(end)],
            "Yesterday": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
            "Last 3 Days": [moment(start).subtract(3, "days"), moment(end)],
            "Last 5 Days": [moment(start).subtract(5, "days"), moment(end)],
            "Last Week": [moment(start).subtract(7, "days"), moment(end)],
            "Last 2 Weeks": [moment(start).subtract(14, "days"), moment(end)],
            "Last Month": [moment(start).subtract(1, "months"), moment(end)],
            "Last 90 Days": [moment(start).subtract(90, "days"), moment(end)],
            "Last 1 Year": [moment(start).subtract(1, "years"), moment(end)],
        }
        let local = {
            "format":"DD-MM-YYYY HH:mm",
            "sundayFirst" : false
        }
        let maxDate = moment(start).add(24, "hour")
         return(
             <div>
                {this.renderContainerNoGrid(ranges, local, maxDate)}
            </div>
         );
     }
}
export {Wrapper};
