<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import m1 from "$lib/assets/body-contouring-and-fat-reduction/1.jpg";
  import m2 from "$lib/assets/body-contouring-and-fat-reduction/2.jpg";
  import m3 from "$lib/assets/body-contouring-and-fat-reduction/3.jpg";

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Transform Your Body with Personalized Body Contouring in Newport Beach";
  let intro: string = `You deserve to feel confident, comfortable, and proud of your body—and at Dr. Corinne Sugihara’s clinic, we make that possible with advanced body contouring and fat reduction treatments designed just for you. If you’ve tried diet and exercise but still struggle with stubborn areas, you’re not alone—and you don’t have to settle.`;
  let body: string = `
Our non-surgical body contouring options, including EvolveX body contouring and Morpheus8 Body treatment, help you achieve noticeable results without the downtime of surgery. Through precise radiofrequency fat reduction, skin tightening and toning, and cellulite reduction, we sculpt and refine your body, giving you smoother, firmer, and more contoured results. From stomach contouring to non-invasive body contouring for hips, thighs, and arms, we offer the best body sculpting treatments in California, tailored to your unique goals.

At our fat reduction clinic near me in Newport Beach, we believe in custom body contouring plans that honor your body, lifestyle, and confidence. Every body sculpting treatment is performed with care, attention, and a focus on results you can see and feel.

If you’re ready for fat removal without surgery, a body contouring non-surgical solution, or non-surgical body sculpting, our team is here to guide you every step of the way. Experience the combination of science, artistry, and compassionate care that sets our body contouring procedures apart.

Take the first step toward your transformation—because you deserve body contouring in Newport Beach that works, feels comfortable, and leaves you empowered.
`;
  let cta: string = "Take the first step toward a smoother, tighter, more youthful you—schedule your Body Contouring and Fat Reduction Treatment Newport Beach consultation today.";

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
    <div class="w-full h-72 sm:h-96 bg-gray-200/40 rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
      [Insert Treatment Hero Image Here]
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
