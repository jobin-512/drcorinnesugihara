<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/1.png"
  import m1 from "$lib/assets/skin/1.jpg"
  import m2 from "$lib/assets/skin/5.jpg"
  import m3 from "$lib/assets/skin/6.jpg"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Acne & Acne Scars";
  let intro: string = `Finally—clear, confident skin you can feel good in again.`;
  let body: string = `
Acne can be more than a skin concern—it can affect how you see yourself every day. Whether you’re struggling with breakouts that just won’t fade or old marks that linger long after acne is gone, you deserve compassionate, effective care that helps your skin heal beautifully. At Dr Corinne Sugihara’s clinic, we specialize in acne scar treatment for women that restores both clarity and confidence.

Your journey begins with listening. Dr Sugihara understands that every woman’s skin tells a different story—hormonal changes, stress, medications, or past treatments that didn’t work. Together, you’ll explore a personalized plan that may include a Morpheus8 acne treatment, a scar reduction treatment, or a soothing acne reduction facial designed to calm inflammation, smooth texture, and renew your glow.

Our acne scar solutions clinic for women combines medical precision with an aesthetic touch. From non-surgical acne scar removal for women to rejuvenating face treatments for spots, each option supports long-term skin health—not just temporary results. Every treatment is performed with your comfort and confidence in mind, in a safe, understanding environment where your concerns are heard.

Because clear, radiant skin isn’t just about appearance—it’s about feeling at home in your own skin again. Discover your path to renewal at our trusted acne reduction facial clinic for women, where compassion meets science and lasting change begins.
`;

  let cta: string = "Schedule your acne scar reduction treatment for women today and experience truly personalized clear skin treatment for women’s health.";

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

    <div class="grid md:grid-cols-2 gap-6">
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m1} alt="skin tightening treatment" class="h-full">
        </div>
        <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m2} alt="skin tightening treatment" class="h-full">
        </div>

    </div>
    
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m3} alt="skin tightening treatment" class="h-full">
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
