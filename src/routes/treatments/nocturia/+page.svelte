<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/8.png"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Nocturia Treatment";
  let intro: string = `Nocturia Treatment — Find Relief, Rest, and Renewed Energy with Dr Corinne Sugihara`;
  let body: string = `
Waking up several times a night to urinate isn’t just frustrating—it’s exhausting. Interrupted sleep can leave you foggy, irritable, and drained, and it often signals that something deeper is going on with your bladder health. At Dr Corinne Sugihara’s women’s health practice, we specialize in nocturia treatment that focuses on the whole woman, not just the symptom.

You deserve restful nights and energized mornings. That’s why Dr Sugihara takes the time to understand your unique situation—whether your frequent night urination is caused by hormonal changes, pelvic floor issues, medication, or an overactive bladder. Together, you’ll create a personalized plan designed to reduce nocturia and improve sleep, restoring your comfort, confidence, and peace of mind.

Using the latest evidence-based therapies, lifestyle adjustments, and compassionate guidance, Dr Sugihara helps you regain control with the best treatment for nocturia—one that fits you. From managing nighttime bladder leakage to rebalancing hydration and bladder signals, you’ll finally have a clear path forward.

As your trusted Bladder Control Nocturia Specialist, Dr Sugihara helps you understand what’s happening in your body, offers real solutions, and supports you every step of the way. You don’t have to live with constant disruptions or embarrassment anymore.

`;

  let cta: string = " Schedule your Nocturia treatment and night-time urination consultation today and start sleeping soundly again.";

  onMount(() => {
    // Animate background orbs
    gsap.to(".bg-shape", {
      y: 40,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { amount: 2 },
    });

    // Gradient text reveal
    gsap.fromTo(
      ".gradient-text",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gradient-text",
          start: "top 85%",
        },
      }
    );

    // Fade in sections
    gsap.from(".fade-in", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 85%",
      },
    });

    // Button hover glow
    document.querySelectorAll(".cta-button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          boxShadow: "0 0 30px 8px rgba(186,104,200,0.45)",
          duration: 0.3,
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          boxShadow: "0 0 0px 0px rgba(186,104,200,0)",
          duration: 0.3,
        });
      });
    });
  });
</script>

<section class="relative overflow-hidden bg-[#FFF7FB] text-[#4A0C59] min-h-screen py-20 px-6">
  <!-- Floating Background Shapes -->
  <div class="bg-shape bg-[#fbcfe8] w-96 h-96 top-10 left-20 absolute"></div>
  <div class="bg-shape bg-[#d8b4fe] w-80 h-80 bottom-10 right-24 absolute"></div>

  <div class="max-w-5xl mx-auto relative z-10 space-y-10">
    <!-- Hero Section -->
    <div class="text-center fade-in">
      <h1 class="gradient-text text-4xl md:text-6xl font-bold mb-6">
        {title}
      </h1>
      <p class="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        {intro}
      </p>
    </div>

    <!-- Placeholder for hero image -->
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
      <img src={img} alt="">
    </div>

    <!-- Body content -->
    <div class="text-lg leading-relaxed space-y-6 fade-in">
      {@html body.replace(/\n/g, "<br><br>")}
    </div>



    <!-- CTA Section -->
    <div class="text-center fade-in space-y-6">
      <p class="text-xl font-medium max-w-3xl mx-auto">{cta}</p>
      <a href="/contact" class="cta-button bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
        Schedule Consultation
      </a>
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
    filter: blur(100px);
    pointer-events: none;
  }
</style>
