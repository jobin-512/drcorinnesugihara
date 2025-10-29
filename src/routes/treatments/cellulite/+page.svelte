<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import img from "$lib/assets/services/4.png"
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import m1 from "$lib/assets/cellulite/1.jpg"
  import m2 from "$lib/assets/cellulite/2.jpg"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Vaginal Laxity Treatment in Newport Beach";
  let intro: string = ` Smooth, Confident, and Beautifully You.`;
  let body: string = `
If you’ve ever looked in the mirror and wished the dimples on your thighs, hips, or abdomen would finally smooth out—you’re not alone. Cellulite affects most women, regardless of body type or fitness level. At Dr Corinne Sugihara’s women’s cellulite treatment clinic in Newport Beach, we offer compassionate, science-backed cellulite reduction treatment designed to help you feel more confident in your skin.

Our EvolveX cellulite treatment uses advanced, non-invasive technology to target stubborn areas, tone underlying tissue, and tighten skin—without surgery or downtime. This gentle yet powerful cellulite treatment non-surgical option safely delivers lasting results that enhance your natural shape. Whether you’re exploring body contouring and cellulite removal, non-surgical cellulite removal for women, or simply searching for cellulite treatment near me, we’re here to help you find the most effective and comfortable path forward.

For women seeking a more dramatic transformation, we also provide surgical cellulite treatment options as part of our comprehensive body cellulite treatment plans. Every care plan is personalized—because your body, goals, and comfort matter most.

Dr Sugihara takes time to listen to and understand your concerns, and to create a treatment plan that helps you rediscover smooth, firm, radiant skin. It’s not just about how you look—it’s about how you feel in your own body.

If you’re ready for a smooth skin cellulite solution women trust, experience compassionate, expert cellulite therapy in Newport Beach with Dr. Corinne Sugihara today.
`;

  let cta: string = "Schedule your consultation and take the first step toward confidence that feels as good as it looks.";

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
