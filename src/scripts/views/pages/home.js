const Home = {
  async render () {
    return `
      <div class="left">
        <div class="text">
          <ul class="feature">
            <li><p id="make">Manage your task! Make it</p></li>
            <li><h1 id="word">SCHEDULED!</h1></li>
          </ul>
          <!-- Additional text content -->
        </div>

        <div class="sub-text">
          <p>
            <strong>uTask</strong> adalah sebuah website yang dibuat untuk
            membantu pengguna dalam manajemen dan penataan tugas. Website ini
            dirancang khusus untuk memenuhi kebutuhan mahasiswa dan individu
            yang ingin mengatur tugas-tugas mereka dengan efektif. <br />
            <strong>uTask</strong> bertujuan untuk meningkatkan produktivitas
            pengguna dalam mengelola tugas-tugas mereka dan membantu mengatasi
            kendala-kendala yang sering terjadi dalam manajemen tugas.
          </p>
          <button class="get-started">
            <a href="dashboard.html">Get Started</a>
          </button>
        </div>
      </div>

      <div class="people-calendar-img">
        <img src="img/homepage-main.png" alt="Image" />
      </div>      
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const element = document.querySelector('main')
    element.id = ''
    // Scrolling
    let prevScrollpos = window.pageYOffset
    const navbar = document.getElementById('navbar')

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0'
      } else {
        navbar.style.top = '-120px'
      }

      prevScrollpos = currentScrollPos
    }
    // sliding
    const words = ['ORGANIZED!', 'PRESENTABLE!', 'SCHEDULED!']
    let currentIndex = 0
    const wordElement = document.getElementById('word')

    function changeWord () {
      wordElement.innerText = words[currentIndex]
      currentIndex = (currentIndex + 1) % words.length
    }

    setInterval(changeWord, 2000)
  }
}

export default Home
