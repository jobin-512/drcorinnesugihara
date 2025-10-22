<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  let contactSection: HTMLElement;
  let formEl: HTMLFormElement;
  let infoEl: HTMLElement;

  onMount(() => {
    // ------------------------------
    // HERO ANIMATIONS
    // ------------------------------
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(".hero-subtitle", {
      y: 50,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".hero-button", {
      scale: 0.7,
      opacity: 0,
      delay: 0.6,
      duration: 0.8,
      ease: "elastic.out(1,0.6)",
    });

    // Floating shapes
    gsap.to(".float", {
      y: -20,
      x: 10,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    // Gradient floating text animation
    gsap.to(".gradient-text", {
      backgroundPosition: "200% 0",
      duration: 3,
      ease: "linear",
      repeat: -1,
    });

    // ------------------------------
    // FORM ANIMATIONS
    // ------------------------------
    gsap.from(".form-heading", {
      scrollTrigger: {
        trigger: ".form-heading",
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formEl.querySelectorAll(".form-field"), {
      scrollTrigger: {
        trigger: formEl,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    gsap.from(".form-button", {
      scrollTrigger: {
        trigger: ".form-button",
        start: "top 80%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "elastic.out(1,0.6)",
    });

    // ------------------------------
    // INFO PANEL ANIMATIONS
    // ------------------------------
    gsap.from(infoEl.querySelectorAll(".info-line"), {
      scrollTrigger: {
        trigger: infoEl,
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // ------------------------------
    // MAP ANIMATIONS
    // ------------------------------
    gsap.from(".map-heading", {
      scrollTrigger: {
        trigger: ".map-heading",
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".map-frame", {
      scrollTrigger: {
        trigger: ".map-frame",
        start: "top 80%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  });
</script>

<div bind:this={contactSection} class="font-sans text-gray-900 overflow-hidden">

  <!-- HERO SECTION -->
  <section class="relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative">
      
      <!-- Hero Text -->
      <div>
        <h1 class="hero-title gradient-text text-4xl md:text-5xl font-serif leading-tight bg-gradient-to-r from-indigo-700 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Get in touch with our care team
        </h1>
        <p class="hero-subtitle mt-6 text-gray-600 max-w-md">
          Questions, appointments, insurance inquiries — we’re here to help.
        </p>
        <button class="hero-button mt-8 bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-400 transition-transform duration-300 relative overflow-hidden">
          Call Clinic
          <span class="shine"></span>
        </button>
      </div>

      <!-- Hero Illustration -->
      <div class="relative flex justify-center lg:justify-end">
        <div class="float absolute -top-10 -left-8 w-24 h-24 bg-indigo-200/50 rounded-full blur-2xl"></div>
        <div class="float absolute bottom-0 -right-12 w-32 h-32 bg-pink-300/70 rounded-full blur-3xl"></div>
        <div class="rounded-3xl bg-gradient-to-br from-indigo-50 to-teal-50 p-8 shadow-xl hero-illustration">
          <img src="/images/contact-illustration.svg" alt="Contact illustration" class="w-full max-w-sm h-auto object-contain" />
        </div>
      </div>

    </div>
  </section>

  <!-- FORM SECTION -->
<section class="relative bg-gradient-to-br from-indigo-50 to-teal-50 py-24 overflow-hidden" id="contact-form">
  <!-- Floating background shapes -->
  <div class="absolute -top-16 -left-16 w-32 h-32 bg-pink-300/50 rounded-full blur-3xl float"></div>
  <div class="absolute -bottom-16 -right-16 w-40 h-40 bg-indigo-200/50 rounded-full blur-3xl float"></div>
  
  <div class="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

    <!-- Form Card -->
    <div class="bg-white shadow-2xl rounded-3xl p-10 relative overflow-hidden">
      <!-- Animated shine effect -->
      <span class="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/60 to-white/0 opacity-30 transform -skew-x-12 animate-shine"></span>

      <h2 class="form-heading text-3xl font-serif text-indigo-900 mb-8">Send us a message</h2>

      <form bind:this={formEl} class="space-y-6">
        <div class="form-field">
          <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" placeholder="Your name" class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105" />
        </div>

        <div class="form-field">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" placeholder="you@example.com" class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105" />
        </div>

        <div class="form-field">
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
          <input type="text" placeholder="(555) 123-4567" class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105" />
        </div>

        <div class="form-field">
          <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea rows="5" placeholder="How can we help you?" class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:scale-105"></textarea>
        </div>

        <div class="form-field form-button">
          <button type="submit" class="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 hover:scale-105 relative overflow-hidden">
            Submit message
            <span class="shine absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/60 to-white/0 opacity-30 transform -skew-x-12 animate-shine"></span>
          </button>
        </div>
      </form>
    </div>

    <!-- Info Panel -->
    <div bind:this={infoEl} class="space-y-6">
      <h3 class="text-2xl font-serif text-indigo-900 mb-6 info-line">Clinic Information</h3>

      <div class="bg-white p-6 rounded-2xl shadow-lg info-line hover:scale-105 transition-transform duration-300">
        <h4 class="text-lg font-semibold text-indigo-800">Address</h4>
        <p class="text-gray-600 mt-2">1401 Avocado Avenue, Suite 602<br />Newport Beach, CA 92660</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg info-line hover:scale-105 transition-transform duration-300">
        <h4 class="text-lg font-semibold text-indigo-800">Phone</h4>
        <p class="text-gray-600 mt-2">Office: 949-644-7433<br />Fax: 949-644-4608‬</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg info-line hover:scale-105 transition-transform duration-300">
        <h4 class="text-lg font-semibold text-indigo-800">Hours</h4>
        <p class="text-gray-600 mt-2">Monday – Friday 8:30am – 4:30pm</p>
      </div>
    </div>
    
  </div>
</section>
  <!-- MAP SECTION -->
  <section class="relative overflow-hidden bg-white py-20">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center relative">
      <div class="float absolute top-10 left-10 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl"></div>
      <div class="float absolute bottom-0 right-12 w-32 h-32 bg-indigo-200/40 rounded-full blur-3xl"></div>

      <h3 class="map-heading text-2xl font-serif text-indigo-900 mb-8">Find us easily</h3>
      <div class="map-frame relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123456789!2d-117.868245!3d33.618910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdfd70e4e0c1b%3A0x5e0a84e7af00102!2sAvocado%20Ave%2C%20Newport%20Beach%2C%20CA!5e0!3m2!1sen!2sus!4v1671038438000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>

</div>

<style>
  :global(.shine) {
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%);
    transform: skewX(-25deg);
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    0% { left: -75%; }
    50% { left: 125%; }
    100% { left: 125%; }
  }

  .gradient-text {
    background-size: 200% 200%;
  }


    .float {
    animation: floaty 6s ease-in-out infinite alternate;
  }
  @keyframes floaty {
    0% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-15px) translateX(10px); }
    100% { transform: translateY(0) translateX(0); }
  }

  .animate-shine {
    animation: shine 2.5s infinite;
  }

  @keyframes shine {
    0% { left: -75%; }
    50% { left: 125%; }
    100% { left: 125%; }
  }
</style>
