const Home = {
  async render() {
    return `
    <div class="left">
    
    <div class="text" data-aos="fade-up">
      <ul class="feature">
        <li><p id="make">Manage your task! Make it</p></li>
        <li><h1 id="word">SCHEDULED!</h1></li>
      </ul>
      <!-- Additional text content -->
    </div>

    <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
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
        <a href="#/about">Get Started</a>
      </button>
    </div>
  </div>

  <div class="people-calendar-img" data-aos="fade-up" data-aos-delay="400">
    <img src="img/homepage-main.png" alt="Image" />
  </div>
  


  <div class="left-2">
    
    <div class="text" data-aos="fade-up">
      <ul class="feature">
        <li><p id="make">Deadline Reminders</p></li>
        
      </ul>
      <!-- Additional text content -->
    </div>
    

    <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
      <p>
        <strong>We</strong> understand that life can get busy. That's why uTask provides smart reminders to keep you informed and on
        top of your tasks. Whether it's an assignment submission deadline, an important meeting, or a personal goal,
        our reminders will ensure you never miss a beat.
      </p>
    </div>
  </div>

  <div class="gclogo-img" data-aos="fade-up" data-aos-delay="400">
    <img src="img/GC-logo.png" alt="Image" />
  </div>



  <div class="left-2">
    
    <div class="text" data-aos="fade-up">
      <ul class="feature">
        <li><p id="make">Get Connect with your Google Calendar!</p></li>
        
      </ul>
      <!-- Additional text content -->
    </div>

    <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
      <p>
      <STRONG>uTask</STRONG> seamlessly integrates with Google
            Calendar, offering
            a unified
            platform for managing both your tasks and events. Effortlessly sync your tasks with your calendar, ensuring
            a comprehensive view of your commitments. Never miss an important deadline or appointment again.
      </p>
    </div>
  </div>

  <div class="gcalendar-img" data-aos="fade-up" data-aos-delay="400">
    <img src="img/gcalendar.png" alt="Image" />
  </div>


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

  </div>



    `;
  },

  async afterRender() {
    const element = document.querySelector("main");
    element.id = "";

    let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-120px";
      }

      prevScrollpos = currentScrollPos;
    };
    // sliding
    const words = ["ORGANIZED!", "PRESENTABLE!", "SCHEDULED!"];
    let currentIndex = 0;
    const wordElement = document.getElementById("word");

    function changeWord() {
      wordElement.innerText = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
    }
    setInterval(changeWord, 2000);
    // Initialize AOS library
    AOS.init();

    // Scrolling and sliding code omitted for brevity
  },
};

export default Home;
