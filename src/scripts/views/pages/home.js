const Home = {
  async render () {
    return `
      <style>
        #home {
          font-weight: bold;
        }
      </style>
      
      <section>
      <div class="left" id="order_1">      
        <div class="text" data-aos="fade-up">
          <ul class="feature">
            <li><p id="make">Manage your task! Make it</p></li>
            <li><h1 id="word">SCHEDULED!</h1></li>
          </ul>
          <!-- Additional text content -->
        </div>

        <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
          <p class="text-gray-500 text-xl my-10">
                <strong>uTask</strong> provides efficient and structured task<br>
                management solutions using the help of the<br>
                API from Google Calendar
              </p>
          <button class="get-started">
            <a href="#/login">Get Started</a>
          </button>
        </div>
      </div>
      </section>

      <div class="people-calendar-img" id="order_2" data-aos="fade-up" data-aos-delay="400">
        <img src="img/homepage-main.png" alt="Image" />
      </div>
      
      <!--  -->
      <div class="breakline"></div>
      <!--  -->
      
      <div class="gclogo-img" id="order_3" data-aos="fade-up" data-aos-delay="400">
        <img src="img/team-work.png" alt="Image" />
      </div>

      <div class="left" id="order_4">              
        <div class="text" data-aos="fade-up">
          <ul class="feature">
            <li><p id="make">Deadline Reminders</p></li>            
          </ul>
        </div>

        <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
          <p>
            <strong>We</strong> understand that life can get busy. That's why uTask provides smart reminders to keep you informed and on
            top of your tasks. Whether it's an assignment submission deadline, an important meeting, or a personal goal,
            our reminders will ensure you never miss a beat.
          </p>
        </div>
      </div>

      <!--  -->
      <div class="breakline"></div>
      <!--  -->

      <div class="left" id="get-connect">
      
        <div class="text" data-aos="fade-up">
          <ul class="feature">
            <li><p id="make">Get Connect with your Google Calendar!</p></li>            
          </ul>
        </div>

        <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
          <p>
          <STRONG>uTask</STRONG> seamlessly integrates with Google
            Calendar, offering a unified platform for managing both your tasks and events. Effortlessly sync your tasks with your calendar, ensuring a comprehensive view of your commitments. Never miss an important deadline or appointment again.
          </p>
        </div>
      </div>

      <div class="gcalendar-img" data-aos="fade-up" data-aos-delay="400">
        <img src="img/gcalendar.png" alt="Image" />
      </div>
      
      <!--  -->
      <div class="breakline"></div>
      <!--  -->

      <div class="left-2-last">
      
        <div class="text-last" data-aos="fade-up">
          <ul class="feature-last">
            <li><p>Experience uTask Today!</p></li>            
          </ul>

          <div class="sub-text-last" data-aos="fade-up" data-aos-delay="200">
            <p>
            Start your uTask journey now and unlock the full potential of your productivity.
            </p>
          </div>
          <!-- Additional text content -->
        </div>

        <div class="people-img" data-aos="fade-up" data-aos-delay="400">
          <img src="img/people.png" alt="Image" />
        </div>
        
        <div class="text-center mt-10" data-aos="fade-up">
        <button class="get-started rounded-3xl py-2 px-10"><a href="#/login" class="text-xl">Start Now</a></button>
        </div>
      </div>

    `
  },

  async afterRender () {
    const element = document.querySelector('main')
    element.id = ''

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
    // Initialize AOS library
    AOS.init()

    // Scrolling and sliding code omitted for brevity
  }
}

export default Home
