const About = {
  async render () {
    return `
      <div class="about-content">
        <div class="text">
          <h1>Manage Your Task!</h1>
          <!-- Additional text content -->
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo, nobis dicta esse accusamus alias dolor blanditiis ut expedita fuga sit cupiditate corporis? Quam vero ex officia. Fugiat, sint voluptatem!. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magnam quia, quas corporis amet maiores ad. Minus aperiam hic itaque consequatur! Cumque ipsum assumenda vitae? Ipsum velit animi ab facilis natus?
          </p>
        </div>
        <div class="about-image">
          <img src="img/checklist.png" alt="Image" />
        </div>
      </div>

      <div class="about-content-2">
        <div class="text">
          <h1>About uTask ?</h1>
          <!-- Additional text content -->
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo, nobis dicta esse accusamus alias dolor blanditiis ut expedita fuga sit cupiditate corporis? Quam vero ex officia. Fugiat, sint voluptatem!. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magnam quia, quas corporis amet maiores ad. Minus aperiam hic itaque consequatur! Cumque ipsum assumenda vitae? Ipsum velit animi ab facilis natus?
          </p>
        </div>
        <div class="about-image-2">
          <img src="img/about-check.png" alt="Image" />
        </div>
      </div>

      <div class="about-content-3">
        <div class="text">
          <h1>Why uTask ?</h1>
          <!-- Additional text content -->
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo, nobis dicta esse accusamus alias dolor blanditiis ut expedita fuga sit cupiditate corporis? Quam vero ex officia. Fugiat, sint voluptatem!. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magnam quia, quas corporis amet maiores ad. Minus aperiam hic itaque consequatur! Cumque ipsum assumenda vitae? Ipsum velit animi ab facilis natus?
          </p>
        </div>
        <div class="about-image-3">
          <img src="img/about-ques.png" alt="Image" />
        </div>
      </div>
    `
  },

  async afterRender () {
    const element = document.querySelector('main')
    element.id = ''
    // Fungsi ini akan dipanggil setelah render()
  }
}

export default About
