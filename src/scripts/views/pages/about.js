const About = {
  async render () {
    return `
      <style>
        #about {
          font-weight: bold;
        }
      </style>

    <div class="left-2">
    
    <div class="text" data-aos="fade-up">
      <ul class="feature">
      <li><p id="make">Manage your task! Make it</p></li>
        <li><p id="make">About uTask!</p></li>
        
      </ul>
      <!-- Additional text content -->
    </div>
    

    <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
      <p>
      <strong>uTask</strong> provides efficient and structured task<br>
      management solutions using the help of the<br>
      API from Google Calendar
      </p>
    </div>
  </div>

  <div class="gclogo-img" data-aos="fade-up" data-aos-delay="400">
    <img src="img/checklist.png" alt="Image" />
  </div>

  <!--  -->
    <div class="breakline"></div>
  <!--  -->
  <!--  -->
    <div class="breakline"></div>
  <!--  -->

  <div class="left-2">
    
    <div class="text" data-aos="fade-up">
      <ul class="feature">
        <li><p id="make">About UTask!</p></li>
        
      </ul>
      <!-- Additional text content -->
    </div>

    <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
      <p>
      <STRONG>uTask</STRONG> is a website for structuring or managing
      tasks or assignments. This website will also
      combine all email accounts owned by users so
      that they become one place and are not
      separated. We took this problem because we
      ourselves had experienced difficulties in
      managing SIB and other household tasks. What's
      more, there are friends who take part-time jobs
      which are difficult to divide the time.
      </p>
    </div>
  </div>

  <div class="gclogo-img" data-aos="fade-up" data-aos-delay="400">
    <img src="img/about-check.png" alt="Image" />
  </div>

  <!--  -->
    <div class="breakline"></div>
  <!--  -->
  <!--  -->
    <div class="breakline"></div>
  <!--  -->


  <div class="left-2-about">
    
  <div class="text" data-aos="fade-up">
    <ul class="feature">
      <li><p id="make">Why uTask ?</p></li>
      
    </ul>
    <!-- Additional text content -->
  </div>

  <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
    <p>1. uTask have to manage tasks and organize tasks by integrating email with Google Calendar.</p>
    <p>2. Manage task management in an efficient and structured manner using the help of Google Calendar's API.</p>
    <p>3. Insert a collection link with a reminder, so you don't forget when there is an assignment submission
    deadline.</p>
  </div>
</div>

<div class="gclogo-img" data-aos="fade-up" data-aos-delay="400">
  <img src="img/GC-logo.png" alt="Image" />
</div>

  <!--  -->
    <div class="breakline"></div>
    <div class="breakline"></div>
  <!--  -->

  
    `
  },

  async afterRender () {
    const element = document.querySelector('main')
    element.id = ''
    // Fungsi ini akan dipanggil setelah render()

    AOS.init()
  }
}

export default About
