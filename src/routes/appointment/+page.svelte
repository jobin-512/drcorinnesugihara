<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Fade + slide-in reveal for content
    gsap.from(".reveal", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".appointment-section",
        start: "top 80%",
      },
    });

    // Gradient text reveal using clipPath
    gsap.fromTo(
      ".gradient-text",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gradient-text",
          start: "top 85%",
        },
      }
    );

    // Floating parallax motion for background shapes
    gsap.to(".bg-shape", {
      y: 40,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 5,
      stagger: { amount: 1.5, from: "edges" },
    });

    // Button hover glow animation
    document.querySelectorAll(".cta-button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          boxShadow: "0 0 25px 8px rgba(186,104,200,0.5)",
          duration: 0.4,
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          boxShadow: "0 0 0px 0px rgba(186,104,200,0)",
          duration: 0.4,
        });
      });
    });
  });
</script>

<section class="appointment-section relative overflow-hidden bg-[#FFF7FB] min-h-screen py-20 px-6 text-[#4A0C59]">
  <!-- Parallax glow shapes -->
  <div class="bg-shape bg-[#fbcfe8] w-72 h-72 top-20 left-10 absolute"></div>
  <div class="bg-shape bg-[#d8b4fe] w-96 h-96 bottom-0 right-20 absolute"></div>

  <div class="max-w-5xl mx-auto relative z-10">
    <h1 class="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-center md:text-left">
      Book Your Personalized Consultation with Dr. Corinne Sugihara
    </h1>

    <div class="space-y-6 text-lg leading-relaxed reveal">
      <p>
        Ready to take control of your health and well-being? Dr. Corinne Sugihara is here to guide you every step of the way. With over 35 years of experience in OB/GYN, Dr. Sugihara offers compassionate, non-judgmental care tailored to your unique needs.
      </p>

      <h2 class="text-2xl font-semibold mt-10 text-[#6A1B9A]">Why Choose Dr. Sugihara?</h2>

      <ul class="list-disc pl-6 space-y-3">
        <li><strong>Expertise You Can Trust:</strong> Dr. Sugihara has delivered thousands of babies and now focuses on gynecology, providing comprehensive care for women at every stage of life.</li>
        <li><strong>Personalized Treatment Plans:</strong> After discussing your goals and concerns, Dr. Sugihara will create an individualized treatment plan to address your specific needs and help you achieve the results you desire.</li>
        <li><strong>Comprehensive Services:</strong> From UTI treatment and Pap tests to menopause management and vaginal dryness solutions, we offer a full range of services to support your health.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-10 text-[#6A1B9A]">Insurance & Payment Options</h2>

      <p>We accept most PPO insurance plans, including:</p>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 font-medium text-[#4A0C59]">
        <p>Anthem Blue Cross</p>
        <p>Blue Shield of California</p>
        <p>Aetna</p>
        <p>Cigna</p>
        <p>Health Net</p>
        <p>United Healthcare</p>
        <p>USAA</p>
        <p>Humana</p>
      </div>

      <p class="mt-3">We also accept plans from <strong>Providence HMO</strong>. Out of network? No problem — we accept cash payments.</p>

      <h2 class="text-2xl font-semibold mt-10 text-[#6A1B9A]">Contact Us Today</h2>

      <p>
        Take the first step towards better health and confidence. Call us at <strong>949-644-7433</strong> or visit our office at:
      </p>

      <p><strong>1401 Avocado Avenue, Suite 602, Newport Beach, CA 92660</strong></p>

      <p>We look forward to partnering with you on your health journey.</p>

      <div class="flex justify-center md:justify-start mt-10">
        <a href="/contact"  class="cta-button bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
          Book Appointment
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .gradient-text {
    background: linear-gradient(90deg, #9b5de5, #f15bb5, #fee440, #00bbf9, #00f5d4);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bg-shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.25;
    filter: blur(90px);
    pointer-events: none;
  }
</style>
