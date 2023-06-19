import '@fortawesome/fontawesome-free/js/all'
import CalendarSource from '../../data/source'
import { dataCalendarTemplate } from '../templates/template-creator'

const Dashboard = {
  async render () {
    return `
      <style>
        .sign-in-button {
          display: none;
        }
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
      
    `;
  },

  async afterRender () {
    // Getting All Data
    const calendars = await CalendarSource.dataCalendar()
    console.log(calendars)

    const items = document.querySelector('.item_container')
    calendars.forEach((item) => {
      items.innerHTML += dataCalendarTemplate(item)
    })

    // Main Detail (id)
    const calendarDetail = await CalendarSource.detailCalendar()
    console.log(calendarDetail)

    // Other

    window.handleFilterClick = (filterId) => {
      console.log(`Filter ${filterId} clicked`)
    }

    const element = document.querySelector('main')
    element.id = 'dashboard'

    const dynamicHeader = document.getElementById('dynamic-header')
    if (dynamicHeader) {
      dynamicHeader.innerHTML = `
        <div>
          <ul class="nav_item-container">
            <li class="nav_item" id="nav_bell">
              <a href="#/dashboard" id="notification-bell" onclick="handleNotificationClick()">
                <i class="fas fa-bell"></i>
              </a>
            </li>                        
            <li class="nav_item">example@dicoding.org</li>
            <li class="nav_item">
              <button class="logout-button" onclick="handleLogout()">
                Logout
              </button>
            </li>
          </ul>
        </div>
      `
    }

    window.handleLogout = () => {
      window.location.href = '#/' // Navigate to the home page
      location.reload() // Refresh the page
    }

    window.handleNotificationClick = () => {
      const notificationBell = document.getElementById('notification-bell')
      notificationBell.style.color = '#138656' // Set the color to the hover color

      // Perform notification activation logic here
      // You can show a popup or perform any other action
    }

    window.showItemDetails = (item) => {
      const modalOverlay = document.getElementById('modal-overlay')

      // Get the task details from the clicked item
      const date = item.querySelector('.item-date').textContent
      const name = item.querySelector('.item-name').textContent
      const time = item.querySelector('.item-time').textContent

      // Update the popup content with the task details
      document.getElementById('popup-title').textContent = name
      document.getElementById('popup-date').textContent = date
      document.getElementById('popup-time').textContent = time

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
