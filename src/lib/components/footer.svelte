<script>
  const year = new Date().getFullYear();
  import footer from "$lib/assets/footer.webp";
  import logo from "$lib/assets/logo.png";
</script>

<footer
  class="relative bg-[#4A0C59] text-gray-200 py-12 px-6 md:px-16 lg:px-24 overflow-hidden"
>
  <!-- Background Overlay Pattern -->
  <div
    class="absolute inset-0 bg-center bg-repeat"
    style="background-image: url('{footer}');"
  ></div>

  <div class="relative grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
    <!-- Column 1: Logo & Contact -->
    <div class="space-y-4">
      <img src={logo} alt="" class="invert grayscale-100 ">

      <div class="space-y-3 mt-4 text-sm">
        <p class="flex items-start gap-2">
          <i class="fa-solid fa-location-dot text-pink-300 mt-1"></i>
          <span>1401 Avocado Avenue, Suite 602, Newport Beach, CA 92660</span>
        </p>
        <p class="flex items-center gap-2">
          <i class="fa-regular fa-envelope text-pink-300"></i>
          <a href="mailto:info@drcorinnesugihara.com" class="hover:text-white">
            info@drcorinnesugihara.com
          </a>
        </p>
        <p class="flex items-center gap-2">
          <i class="fa-solid fa-phone text-pink-300"></i>
          <a href="tel:9496447433" class="hover:text-white">949-644-7433</a>
        </p>
      </div>
    </div>

    <!-- Column 2: Our Services -->
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
      <ul class="space-y-1 text-sm text-gray-300">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li><a href="/treatments" class="hover:text-white">Treatments</a></li>
        <li><a href="/about-us" class="hover:text-white">About Us</a></li>
        <li><a href="/contact-us" class="hover:text-white">Contact Us</a></li>
        <li><a href="/book-a-consultation" class="hover:text-white">Book a Consultation</a></li>
      </ul>
    </div>

    <!-- Column 3: Explore -->
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Services</h3>
      <ul class="space-y-1 text-sm text-gray-300">
        <li><a href="/after-childbirth-non-Invasive-mommy-makeover" class="hover:text-white">After Childbirth / Non-Invasive Mommy Makeover</a></li>
        <li><a href="/bladder-leaks-&-incontinence" class="hover:text-white">Bladder Leaks and Incontinence</a></li>
        <li><a href="/perimenopause-and-menopause" class="hover:text-white">Perimenopause and Menopause</a></li>
        <li><a href="/breast-cancer-survivors" class="hover:text-white">Breast Cancer Survivors</a></li>
      </ul>
    </div>

    <!-- Column 4: About Us -->
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">location</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.726353439861!2d-117.87333772380903!3d33.612403940826326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce08edff13b31%3A0x2d126b0a89fb76d8!2s1401%20Avocado%20Ave%20Ste%20602%2C%20Newport%20Beach%2C%20CA%2092660!5e0!3m2!1sen!2sus!4v1715057066481!5m2!1sen!2sus" width="300" height="150" style="border: 0px; opacity: 1; visibility: visible;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  </div>

  <!-- Bottom -->
  <div class="relative z-10 mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
    © {year} DR. CORINNE SUGIHARA. All Rights Reserved
  </div>
</footer>
