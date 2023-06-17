const Dashboard = {
  async render () {
    return `
        <div class="header-filter">
          <div class="filter-item" id="fi-1">
            <p>All Tasks</p>
          </div>
          <div class="filter-item" id="fi-2">
            <p>Today Tasks</p>
          </div>
          <div class="filter-item" id="fi-3">
            <p>Passed Tasks</p>
          </div>
        </div>
        <div class="item">
          <div class="item-date">11 jun 2023</div>
          <div class="item-name">Konsultasi Mingguan</div>
          <div class="item-time">11:00 AM - 12:00 PM</div>
        </div>
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const element = document.querySelector('main')
    element.id = 'dashboard'
  }
}

export default Dashboard
