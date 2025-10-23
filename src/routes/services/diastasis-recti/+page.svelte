<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import m1 from "$lib/assets/diastasis-recti/1.jpg";
  import m2 from "$lib/assets/diastasis-recti/2.jpg";
  import m3 from "$lib/assets/diastasis-recti/3.jpg";
  import m4 from "$lib/assets/diastasis-recti/4.jpg";


  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Restore Your Core with Expert Diastasis Recti Care";
  let intro: string = `Every mother knows the body changes pregnancy can bring—and diastasis recti after pregnancy is one of the most common and frustrating challenges. You may notice a stubborn gap in your abdominal muscles, loose skin, or difficulty regaining your pre-pregnancy shape. These changes can feel discouraging, but you’re not alone—and there are real solutions.`;
  let body: string = `
At Dr. Corinne Sugihara’s practice, we specialize in diastasis recti treatment that’s personalized, compassionate, and results-driven. Whether you’re experiencing abdominal diastasis recti, struggling with diastasis recti postpartum, or seeking to tighten loose skin after pregnancy, we offer both non-surgical and advanced options. Our Non-surgical Diastasis Recti repair and Evolve X Diastasis Recti programs combine core strengthening for moms with non-invasive body contouring, helping you tone and tighten your abdomen after pregnancy while supporting your overall recovery.

We understand the emotional and physical impact that every mother with diastasis recti experiences. That’s why our approach focuses on post-pregnancy body restoration, abdominal muscle separation treatment, and postpartum abdominal tightening that truly fits your needs. From diastasis recti recovery to skin tightening after pregnancy, we provide solutions that empower you to feel strong, confident, and whole again.

Take control of your postpartum journey. Explore Diastasis Recti treatment with Dr. Corinne Sugihara and rediscover the strength and shape you deserve—a trusted, compassionate approach to your mommy makeover in Newport Beach.
`;
  let cta: string = "Take the first step toward a smoother, tighter, more youthful you—schedule your Skin Tightening Treatment Newport Beach consultation today.";

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
    
    <div class="grid md:grid-cols-2 gap-6">
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m3} alt="skin tightening treatment" class="h-full">
        </div>
        <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m4} alt="skin tightening treatment" class="h-full">
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
