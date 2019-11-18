import React from 'react'
import dateFns from 'date-fns'
import {getSelectedDate} from '../store/calendar'
import {connect} from 'react-redux'

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }

  // componentDidMount() {
  //   console.log('state in the calendar:',this.state)
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedDate !== this.state.selectedDate) {
      // console.log(`cal Update ${this.state.selectedDate}`)
      // console.log(`cal props in componentdidupdate $${this.props}`)
    }
  }
  onDateClick = day => {
    this.setState({
      selectedDate: day,
      currentMonth: day
    })
    getSelectedDate(day)

    console.log('cal date in onDateClick', day)
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }
  renderHeader() {
    const dateFormat = 'MMMM YYYY'

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            previous month
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">next month</div>
        </div>
      </div>
    )
  }

  renderDays() {
    const dateFormat = 'dddd'
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      )
    }

    return <div className="days row">{days}</div>
  }

  renderCells() {
    const {currentMonth, selectedDate} = this.state
    const monthStart = dateFns.startOfMonth(currentMonth)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)

    const dateFormat = 'D'
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat)
        const cloneDay = day
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? 'disabled'
                : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={day}
            onClick={() => {
              this.onDateClick(dateFns.parse(cloneDay))
              this.props.getSelectedDate(dateFns.parse(cloneDay))

              // console.log('current state in Calendar component:', this.state)
              console.log('************', dateFns.parse(cloneDay))
              console.log('day', day)
              // console.log('month:', this.state.currentMonth)
              // console.log('day', this.state.selectedDate)
              // console.log('props in Calendar:', this.props)
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        )
        day = dateFns.addDays(day, 1)
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      )
      days = []
    }
    return <div className="body">{rows}</div>
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state in mapstatetoprops', state)
  return {
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedDate: date => dispatch(getSelectedDate(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
