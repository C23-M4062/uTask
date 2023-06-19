import '@fortawesome/fontawesome-free/js/all'
import CalendarSource from '../../data/source'
import { dataCalendarTemplate } from '../templates/template-creator'

const Dashboard = {
  async render () {
    return `
      <style>
        main {
          align-content: flex-start; 
        }
        .open {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 80%);
        }
      </style>

      <div class="header-filter" id="header-filter">
        <a href="" id="fi-1" onclick="handleFilterClick('fi-1')">
          <p>All Tasks</p>
        </a>
        <a href="" id="fi-2" onclick="handleFilterClick('fi-2')">
          <p>Today Tasks</p>
        </a>
        <a href="" id="fi-3" onclick="handleFilterClick('fi-3')">
          <p>Passed Tasks</p>
        </a>
      </div>

      <div class="item_container">
        
      </div>
      


      <!-- Modal or overlay element -->
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content">
          <div class="popup-wrapper">
            <div class="popup-header">
              <h1 id="popup-title">Title</h1>
              <button class="close-button" onclick="hideItemDetails()">&times;</button>
            </div>
            <div class="popup-body">
              <ul class="popup-list">
                <li>
                  <div class="popup-item">
                    <p id="popup-day">Friday, 16 June 2023</p>
                  </div>
                </li>
                <li>
                  <div class="popup-item">
                    <i class="far fa-clock"></i>
                    <p id="popup-time">Time</p>
                  </div>
                </li>
                <li>
                  <div class="popup-item">
                    <i class="far fa-calendar-alt"></i>
                    <p id="popup-date">Date</p>
                    <br>
                  </div>
                </li>
                <li>
                  <div class="popup-item">
                    <p id="popup-id">Id</p>
                  </div>
                </li>
                <div class="popup-description">
                  <p id="popup-description-text">Hi F-18!
                  <br>
                  Kami mengundang Anda untuk menghadiri konsultasi mingguan - 14. Sesi ini akan di fasilitasi oleh mentor: Lale Inaya Firasya.
                  Silakan persiapkan jika Anda memiliki pertanyaan atau concern tertentu yang ingin bagikan ke mentor Anda.
                  <br>
                  Terima kasih & Semoga menyenangkan!
                  </p><br>
                </div>
                <li>
                  <div class="popup-item">
                    <i class="fab fa-google-plus"></i>
                    <p id="popup-meet-link">Join with Google Meet: </p>
                  </div>
                </li>
                <li>
                  <div class="popup-item">
                    <i class="far fa-address-card"></i>
                    <p id="popup-mentor">Lale Inaya Firasya</p>
                  </div>
                </li>
                <li>
                  <div class="popup-item">
                    <i class="fas fa-pencil-alt"></i>
                    <p id="popup-created-by">Created by SIB 4 DICODING</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },

  async afterRender () {
    // Getting All Data
    const calendarsData = await CalendarSource.dataCalendar();
    const calendars = calendarsData?.data?.items; // Memperbarui cara mendapatkan nilai `calendars`
    const summary = calendarsData?.data?.summary
    console.log(summary)

    const items = document.querySelector(".item_container");

    if (Array.isArray(calendars) && calendars.length > 0) {
      calendars.forEach((item) => {
        items.innerHTML += dataCalendarTemplate(item);
      });

      const dynamicHeader = document.getElementById("dynamic-header");
      if (dynamicHeader) {
        dynamicHeader.innerHTML = `
        <div>
          <ul class="nav_item-container">
            <li class="nav_item" id="nav_bell">
              <a href="#/dashboard" id="notification-bell" onclick="handleNotificationClick()">
                <i class="fas fa-bell"></i>
              </a>
            </li>                        
            <li class="nav_item">${summary}</li>
            <li class="nav_item">
              <button class="logout-button" onclick="handleLogout()">
                LogOut
              </button>
            </li>
          </ul>
        </div>
      `;
      }

      window.handleLogout = () => {
        const logoutUrl = 'https://utask-backend-production.up.railway.app/auth/logout';
      
        fetch(logoutUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.data === true) {
              window.location.href = '#/'; // Redirect to the home page
              location.reload(); // Refresh the page
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    } else {
      items.innerHTML = "<h2>Silahkan Login Terlebih Dahulu</h2>";
    }


    // Main Detail (id)
    const calendarDetail = await CalendarSource.detailCalendar()
    console.log(calendarDetail)

    // Other

    window.handleFilterClick = (filterId) => {
      console.log(`Filter ${filterId} clicked`)
    }

    const element = document.querySelector('main')
    element.id = 'dashboard'

    

    window.handleNotificationClick = () => {
      const notificationBell = document.getElementById('notification-bell')
      notificationBell.style.color = '#138656' // Set the color to the hover color

      // Perform notification activation logic here
      // You can show a popup or perform any other action
    }

    window.showItemDetails = (item) => {
      const modalOverlay = document.getElementById('modal-overlay')

      // Get the task details from the clicked item
      const id = item.querySelector('.item-id').textContent
      fetchCalendarData(id)

      // Update the popup content with the task details
      function fetchCalendarData (id) {
        const url = `https://utask-backend-production.up.railway.app/calendar/${id}`

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const eventData = data.data

            document.getElementById('popup-title').textContent =
              eventData.summary
            document.getElementById('popup-day').textContent = getFormattedDate(
              eventData.start.dateTime
            )
            document.getElementById('popup-time').textContent =
              getFormattedTime(
                eventData.start.dateTime,
                eventData.end.dateTime
              )
            document.getElementById('popup-date').textContent =
              getFormattedFullDate(eventData.start.dateTime)
            document.getElementById('popup-id').textContent = eventData.id
            document.getElementById(
              'popup-description-text'
            ).innerHTML = `${eventData.description}`
            document.getElementById(
              'popup-meet-link'
            ).innerHTML = `Join with Google Meet: <a href="${eventData.hangoutLink}" target="_blank">${eventData.hangoutLink}</a>`
            document.getElementById('popup-mentor').textContent =
              eventData.organizer.displayName
            document.getElementById(
              'popup-created-by'
            ).textContent = `Created by ${eventData.creator.email}`
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }

      function getFormattedDate (dateTime) {
        const date = new Date(dateTime)
        const options = {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
        return date.toLocaleDateString('en-US', options)
      }

      function getFormattedTime (startDateTime, endDateTime) {
        const startTime = startDateTime.split('T')[1].slice(0, 5)
        const endTime = endDateTime.split('T')[1].slice(0, 5)
        return `${startTime} - ${endTime}`
      }

      function getFormattedFullDate (dateTime) {
        const date = new Date(dateTime)
        const options = {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
        return date.toLocaleDateString('en-US', options)
      }

      modalOverlay.style.display = 'flex'
    }

    window.hideItemDetails = () => {
      const modalOverlay = document.getElementById('modal-overlay')
      modalOverlay.style.display = 'none'
    }

    // deleting Class "Open"
    const drawer = document.getElementById('dynamic-header')

    function removeOpenClass () {
      if (window.innerWidth > 535) {
        drawer.classList.remove('open')
      }
    }
    window.addEventListener('DOMContentLoaded', removeOpenClass)
    window.addEventListener('resize', removeOpenClass)
  }
}

export default Dashboard
