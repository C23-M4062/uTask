import API_ENDPOINT from '../globals/api-endpoint'

class CalendarSource {
  static async dataCalendar () {
    const response = await fetch(API_ENDPOINT.DATA)
    const responseJson = await response.json()
    return responseJson;
  }

  static async detailCalendar () {
    const response = await fetch(API_ENDPOINT.DETAIL)
    const responseJson = await response.json();
    return responseJson;
  }
}

export default CalendarSource
