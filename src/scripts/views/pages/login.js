const Login = {
  async render () {
    return `
      <style>
        .sign-in-button {
          display: none;
        }
        main {
          align-content: flex-start; 
        }
        .nav_item-container {
          padding-bottom: 0;
        }
        .open {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 68%);
        }
      </style>

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
          <button class="btn-login" onclick="handleLogin()">
            <i class="fa-brands fa-google" style="color: #ffffff;"></i> Sign In
          </button>
          <button class="btn-about">
            <a href="#/home">Find More</a>
          </button>
        </div>
      </div>
      <div class="side-img">
        <img src="img/people.png" alt="" />
      </div>

      <style>
        
      </style>
    `;
  },

  async afterRender () {
    const element = document.querySelector('main')
    element.id = 'login-main'
    // Fungsi ini akan dipanggil setelah render()

    // Handle Login
    window.handleLogin = () => {
      const loginUrl = 'https://utask-backend-production.up.railway.app/auth/login-gl';
      
      
    };
  }
}

export default Login
