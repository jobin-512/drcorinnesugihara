<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/6.png"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Labial Hypertrophy Treatment in Newport Beach";
  let intro: string = `Gentle, Personalized Solutions for Comfort, Confidence, and Self-Care`;
  let body: string = `
When something doesn’t feel right, you know it. Whether it’s irritation from clothing, discomfort during intimacy, or simply feeling self-conscious about how your body looks, labial hypertrophy—an enlargement of the labia—can affect more than just your physical comfort. It can impact your confidence, your movement, and your sense of ease in your own body.

At Dr. Corinne Sugihara’s practice in Newport Beach, you’ll find compassionate, discreet, and expert labial hypertrophy treatment designed around you—not just your symptoms. Dr. Sugihara understands that every woman’s anatomy and concerns are unique. That’s why she offers both non-surgical labiaplasty options and minimally invasive procedures like Forma V labia reduction and Morpheus8 V labia treatment—gentle, modern technologies that tighten and reshape tissue without surgery or downtime.

If you’re seeking labial hypertrophy natural treatment or exploring non-surgical labia reduction, you’ll appreciate Dr. Sugihara’s integrative approach. She focuses on restoring comfort, reducing irritation, and achieving balanced, natural-looking results that honor your body’s individuality.

These advanced labia discomfort solutions and female genital rejuvenation options are part of her holistic commitment to women’s wellness. Whether you’re ready for vaginal lip reduction, minimally invasive labia reduction, or just want to discuss your concerns openly, you deserve care that listens first and acts second.

Rediscover ease, comfort, and confidence with trusted labial hypertrophy treatment in Newport Beach—where compassion meets precision, and you feel truly understood.

Experience personalized, non-surgical labiaplasty in Newport Beach with Dr. Corinne Sugihara. Your comfort matters here.
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
