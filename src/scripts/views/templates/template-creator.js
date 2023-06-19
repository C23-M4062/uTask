import CONFIG from '../../globals/config'

const dataCalendarTemplate = (calendars) => `
    <div class="item" onclick="showItemDetails(this)">
    <div class="item-date">${calendars.start.dateTime.split('T')[0]}</div>
    <div class="item-name">${calendars.summary}</div>
    <div class="item-time">${calendars.start.dateTime
      .split('T')[1]
      .slice(0, 5)} - ${calendars.end.dateTime.split('T')[1].slice(0, 5)}</div>
  </div>
`

export { dataCalendarTemplate }
