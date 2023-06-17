const Dashboard = {
  async render() {
    return `
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
      <div class="item">
        <div class="item-date">11 jun 2023</div>
        <div class="item-name">Konsultasi Mingguan</div>
        <div class="item-time">11:00 AM - 12:00 PM</div>
      </div>
    `;
  },

  async afterRender() {
    window.handleFilterClick = (filterId) => {
      console.log(`Filter ${filterId} clicked`);
    };

    const element = document.querySelector("main");
    element.id = "dashboard";

    const dynamicHeader = document.getElementById("dynamic-header");
    if (dynamicHeader) {
      dynamicHeader.innerHTML = `
        <div>
          <ul class="nav_item-container">
            <li class="nav_item"><a href="#/dashboard">Home</a></li>
            <li class="nav_item">example@dicoding.org</li>
            <li class="nav_item">
              <button class="logout-button" onclick="handleLogout()">
                Logout
              </button>
            </li>
          </ul>
        </div>
      `;
    }

    window.handleLogout = () => {
      window.location.href = "#/"; // Navigate to the home page
      location.reload(); // Refresh the page
    };
  },
};

export default Dashboard;
