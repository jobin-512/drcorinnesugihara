<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Fade-in stagger animation
    gsap.from(".contact-section h1, .contact-section p, .contact-info, form", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });

    // Gradient reveal animation
    gsap.fromTo(
      ".gradient-text",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gradient-text",
          start: "top 85%",
        },
      }
    );

    // Button hover glow
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          boxShadow: "0 0 30px 5px rgba(186,104,200,0.6)",
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

<section class="relative contact-section overflow-hidden bg-[#FFF7FB] min-h-screen flex flex-col justify-center">
  <!-- Floating shapes -->
  <div class="bg-shape bg-pink-200 w-64 h-64 top-10 left-10 absolute"></div>
  <div class="bg-shape bg-purple-200 w-72 h-72 bottom-0 right-20 absolute"></div>

  <div class="max-w-5xl mx-auto px-6 py-20 text-center md:text-left relative z-10 text-[#4A0C59]">
    <h1 class="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
      Contact Dr. Corinne Sugihara – Exceptional Women’s Health Starts Here
    </h1>

    <div class="max-w-3xl space-y-5 text-lg leading-relaxed">
      <p>Your health deserves attention, expertise, and care that empowers you—and that’s exactly what you’ll find at Dr. Corinne Sugihara’s Newport Beach practice. Whether you’re exploring breast cancer survivorship options, managing bladder concerns, or seeking personalized gynecologic care, we’re ready to help you feel confident, supported, and in control.</p>

      <p>Don’t wait—call us now at <strong class="text-[#6A1B9A]">949-644-7433</strong> to schedule your consultation with a team that listens, understands, and delivers results. Prefer convenience? Book your appointment online and experience care designed around your busy lifestyle.</p>

      <p>Our Newport Beach office at <strong>1401 Avocado Avenue, Suite 602</strong> offers a private, welcoming environment where your comfort is our priority. We accept most PPO insurance plans and provide flexible options for out-of-network patients.</p>

      <p>Questions? Concerns? Just fill out our secure online form, and we’ll get back to you quickly with guidance and next steps. At Dr. Sugihara’s practice, you’re not just a patient—you’re a partner in your health journey. Take action today and experience care that’s compassionate, confident, and results-driven.</p>
    </div>

    <!-- Contact form -->
    <div class="mt-12 contact-info">
      <form class="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto md:mx-0">
        <h3 class="text-2xl font-semibold text-[#4A0C59] mb-6 text-center md:text-left">Send us a message</h3>
        <div class="space-y-5">
          <input type="text" placeholder="Full Name" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input type="email" placeholder="Email Address" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <textarea rows="4" placeholder="Your Message" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
          <button type="submit" class="bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
            Submit
          </button>
        </div>
      </form>
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
    opacity: 0.2;
    filter: blur(80px);
    pointer-events: none;
  }

  input, textarea {
    color: #4A0C59;
  }
</style>
