const Contact = {
    async render () {
      return `
        <style>
          #contact {
            font-weight: bold;
          }
        </style>
  
  <!-- Team Section Start -->
      <section id="team" class="team" >
        <h2 data-aos="fade-up" data-aos-delay="400">Contact <span>Us</span></h2>
        <p data-aos="fade-up" data-aos-delay="400">We are the developers of the uTask. We would love to hear your suggestions or criticisms via our email. Thank You !</p>
        
        <!-- Email Icon Section Start -->
  <section id="email" class="email" data-aos="fade-up" data-aos-delay="500">
    <a href="mailto:ngurahchandra19@gmail.com">
      <i class="fas fa-envelope"></i>
      <p>uTask</p>
    </a>
  </section>
  <!-- Email Icon Section End -->
        
        
        <div class="row" data-aos="fade-up" data-aos-delay="200">
          <div class="team-card" data-aos="fade-up" data-aos-delay="500">
            <img src="img/fahril.jpg" alt="Front-end Developer" class="team-card-img" />
            <h3 class="team-card-tittle">FRONT-END DEVELOPER</h3>
            <p>M. Fahril</p>
          </div>
          <div class="team-card" data-aos="fade-up" data-aos-delay="500">
            <img src="img/ngurah.jpg" alt="Front-end Developer" class="team-card-img" />
            <h3 class="team-card-tittle">FRONT-END DEVELOPER</h3>
            <p>Si Gede Ngurah Chandra Adi Natha</p>
          </div>
          <div class="team-card" data-aos="fade-up" data-aos-delay="500">
            <img src="img/saddam.jpg" alt="Front-end Developer" class="team-card-img" />
            <h3 class="team-card-tittle">FRONT-END DEVELOPER</h3>
            <p>Saddam Rasyad Abdillah</p>
          </div>
          <div class="team-card" data-aos="fade-up" data-aos-delay="500">
            <img src="img/devo.jpg" alt="Back-end Developer" class="team-card-img" />
            <h3 class="team-card-tittle">BACK-END DEVELOPER</h3>
            <p>Pande Putu Devo Punda M</p>
          </div>
        </div>
      </section>
      <!-- Team Section End -->
  
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
  
  export default Contact
  