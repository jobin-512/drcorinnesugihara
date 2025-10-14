<script>
  const year = new Date().getFullYear();
  import footer from "$lib/assets/footer.webp";
</script>

<footer
  class="relative bg-[#4A0C59] text-gray-200 py-12 px-6 md:px-16 lg:px-24 overflow-hidden"
>
  <!-- Background Overlay Pattern -->
  <div
    class="absolute inset-0 bg-center bg-repeat"
    style="background-image: url('{footer}');"
  ></div>

  <div class="relative grid grid-cols-1 md:grid-cols-5 gap-10 z-10">
    <!-- Column 1: Logo & Contact -->
    <div class="space-y-4">
      <h2 class="text-white text-xl font-semibold">
        Dr. Corinne Sugihara
      </h2>
      <p class="uppercase tracking-widest text-sm text-gray-300">
        Gynecology
      </p>
      <p class="text-sm leading-relaxed text-gray-400">
        Sed ut perspiciatis unde omnis natus error voluptatem doloremque laudantiumes
      </p>

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
      <h3 class="text-white font-semibold text-lg mb-4">Our Services</h3>
      <ul class="space-y-1 text-sm text-gray-300">
        <li>Bladder Leaks</li>
        <li>Body Contouring</li>
        <li>Diastasis Recti</li>
        <li>Vaginal Laxity</li>
        <li>Vaginal Dryness</li>
        <li>Skin Tightening</li>
        <li>Labial Hypertrophy</li>
        <li>Stress</li>
        <li>Urge Vaginal Dryness</li>
        <li>Mixed</li>
      </ul>
    </div>

    <!-- Column 3: Explore -->
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">Explore</h3>
      <ul class="space-y-1 text-sm text-gray-300">
        <li>Skin Tightening</li>
        <li>Vaginal Dryness</li>
        <li>Recurrent UTIs</li>
        <li>Body Contouring</li>
        <li>Cellulite</li>
        <li>Fine Lines and Wrinkles</li>
        <li>Sunspots and Pigmentation</li>
        <li>Scars and Stretch Marks</li>
      </ul>
    </div>

    <!-- Column 4: About Us -->
    <div>
      <h3 class="text-white font-semibold text-lg mb-4">About Us</h3>
      <ul class="space-y-1 text-sm text-gray-300">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Book a Consultation</li>
        <li>Landing Page for the Book</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
    </div>

    <!-- Column 5: Newsletter -->
    <div class="space-y-5">
      <h3 class="text-white font-semibold text-lg mb-4">Newsletters</h3>
      <p class="text-sm text-gray-400">
        Sed ut perspiciatis unde omnis natus error sit voluptatem
      </p>

      <div class="relative w-full">
        <input
          type="email"
          placeholder="Email Address"
          class="w-full rounded-full border border-gray-400 bg-transparent text-white py-3 pl-5 pr-12 placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2"
          aria-label="Subscribe"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="pt-5">
        <h4 class="text-white font-semibold flex items-center gap-2">
          <i class="fa-regular fa-clock text-pink-300"></i> Opening Hours
        </h4>
        <p class="text-sm text-gray-300 mt-1">Sun - Friday, 08:00 am - 05:00 pm</p>
      </div>
    </div>
  </div>

  <!-- Bottom -->
  <div class="relative z-10 mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
    © {year} DR. CORINNE SUGIHARA. All Rights Reserved
  </div>
</footer>
