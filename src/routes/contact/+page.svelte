<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  let contactSection: HTMLElement;
  let formEl: HTMLFormElement;
  let infoEl: HTMLElement;

  onMount(() => {
    // Hero reveal animation
    gsap.from(".hero-stagger", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Floating shapes
    gsap.to(".float", {
      y: -15,
      duration: 3.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.6,
    });

    // Form animation on scroll
    gsap.from(formEl.querySelectorAll(".form-field"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formEl,
        start: "top 85%",
      },
    });

    // Contact info fade-up
    gsap.from(infoEl.querySelectorAll(".info-line"), {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: infoEl,
        start: "top 90%",
      },
    });
  });
</script>

<div bind:this={contactSection} class="font-sans text-gray-900 overflow-hidden">

  <!-- Hero Section -->
  <section class="relative bg-white overflow-hidden">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div>
        <h1 class="hero-stagger text-4xl md:text-5xl font-serif text-indigo-900 leading-tight">
          Get in touch with our care team
        </h1>
        <p class="hero-stagger mt-6 text-gray-600 max-w-md">
          Whether you have questions about our services, want to schedule an appointment, or need insurance information — we’re here to help.
        </p>
        <button class="hero-stagger mt-8 bg-indigo-700 text-white px-5 py-3 rounded-full shadow hover:bg-indigo-800 transition">
          Call Clinic
        </button>
      </div>

      <!-- Decorative Illustration -->
      <div class="relative flex justify-center lg:justify-end">
        <div class="float absolute -top-8 -left-8 w-24 h-24 bg-teal-200/60 rounded-full blur-md"></div>
        <div class="float absolute bottom-0 -right-12 w-32 h-32 bg-pink-300/70 rounded-full blur-md"></div>
        <div class="rounded-3xl bg-gradient-to-br from-indigo-50 to-teal-50 p-8 shadow-xl">
          <img src="/images/contact-illustration.svg" alt="Contact illustration" class="w-full max-w-sm h-auto object-contain" />
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="bg-teal-50" id="contact-form">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Form -->
      <div>
        <h2 class="text-2xl font-serif text-indigo-900 mb-6">Send us a message</h2>

        <form bind:this={formEl} class="space-y-5">
          <div class="form-field">
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Your name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div class="form-field">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="you@example.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div class="form-field">
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
            <input type="text" placeholder="(555) 123-4567" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div class="form-field">
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="4" placeholder="How can we help you?" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          <div class="form-field">
            <button type="submit" class="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-full shadow transition w-full">
              Submit message
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Info Panel -->
      <div bind:this={infoEl}>
        <h3 class="text-2xl font-serif text-indigo-900 mb-6 info-line">Clinic Information</h3>

        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm info-line">
            <h4 class="text-lg font-semibold text-indigo-800">Address</h4>
            <p class="text-gray-600 mt-2">1441 Avocado Avenue<br />Newport Beach, CA 92660</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm info-line">
            <h4 class="text-lg font-semibold text-indigo-800">Phone</h4>
            <p class="text-gray-600 mt-2">+1 (949) 555-0189</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm info-line">
            <h4 class="text-lg font-semibold text-indigo-800">Email</h4>
            <p class="text-gray-600 mt-2">care@clinicname.com</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm info-line">
            <h4 class="text-lg font-semibold text-indigo-800">Hours</h4>
            <p class="text-gray-600 mt-2">
              Mon–Fri: 9:00 AM – 5:00 PM<br />Sat–Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="relative overflow-hidden bg-white py-20">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">
      <h3 class="text-2xl font-serif text-indigo-900 mb-8">Find us easily</h3>
      <div class="relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
        <!-- Replace with real embed -->
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
  :global(.container) {
    max-width: 1200px;
  }
</style>
