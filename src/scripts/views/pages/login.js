const Login = {
  async render () {
    return `
      <div class="left">
        <div class="img-app">
          <div>
            <img src="img/checklist.png" alt="" class="logo-check" />
          </div>
          <div class="line">
            <div class="line1"><div class="line2"></div></div>
          </div>
          <div>
            <img src="img/GC-logo.png" alt="" class="logo-gc" />
          </div>
        </div>
        <div>
          <p class="what-is">
            uTask provides efficient and structured task management solutions
            using the help of the API from Google Calendar.Please login with
            your google account.
          </p>
        </div>
        <div>
          <button class="btn-login">
            <i class="fab fa-google"></i> Sign In
          </button>
          <button class="btn-about">
            <a href="index.html">Find More</a>
          </button>
        </div>
      </div>
      <div class="side-img">
        <img src="img/people.png" alt="" />
      </div>
    `
  },

  async afterRender () {
    const element = document.querySelector('main')
    element.id = 'login-main'
    // Fungsi ini akan dipanggil setelah render()
  }
}

export default Login
