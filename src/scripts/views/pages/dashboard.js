import '@fortawesome/fontawesome-free/js/all'

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
      <div class="item" onclick="showItemDetails(this)">
        <div class="item-date">11 Jun 2023</div>
        <div class="item-name">Konsultasi Mingguan</div>
        <div class="item-time">11:00 AM - 12:00 PM</div>
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
                    <p id="popup-meet-link">Join with Google Meet: https://meet.google.com/ehe-hgvu-xn</p>
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
