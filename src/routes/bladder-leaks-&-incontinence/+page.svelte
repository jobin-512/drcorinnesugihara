<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/17.png"
  import m1 from "$lib/assets/bladder-leaks/1.png"
  import m2 from "$lib/assets/bladder-leaks/2.jpg"
  import m3 from "$lib/assets/bladder-leaks/3.jpg"

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Floating shapes parallax
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
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gradient-text",
          start: "top 85%",
        },
      }
    );

    // Staggered fade-ins
    gsap.from(".fade-in", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 90%",
      },
    });

    // Hover glow for service cards
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          boxShadow: "0 0 35px rgba(149, 117, 205, 0.4)",
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          boxShadow: "0 0 0 rgba(149, 117, 205, 0)",
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  });
</script>

<section class="relative overflow-hidden bg-[#FDF8FD] text-[#4A0C59] py-20 px-6">
  <!-- Floating pastel background shapes -->
  <div class="bg-shape bg-[#F8CFF8] w-96 h-96 top-10 left-20 absolute rounded-full blur-[100px] opacity-25"></div>
  <div class="bg-shape bg-[#C7B8F5] w-80 h-80 bottom-10 right-24 absolute rounded-full blur-[100px] opacity-25"></div>

  <div class="max-w-6xl mx-auto relative z-10 space-y-14">
    <!-- Hero -->
    <div class="text-center fade-in">
      <h1 class="gradient-text text-4xl md:text-6xl font-bold mb-6">
        Bladder Leaks & Incontinence Treatment in Newport Beach
      </h1>
      <p class="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
        Find relief, restore control, and reclaim your confidence—with compassionate, personalized care that truly understands women.
      </p>
    </div>

    <!-- Hero image placeholder -->
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
      <img src={img} alt="">
    </div>

    <!-- Main content -->
    <div class="space-y-8 text-lg leading-relaxed fade-in max-w-4xl mx-auto text-gray-700">
      <p>
        It’s one of those topics few women feel comfortable talking about—but bladder leaks and incontinence are far more common than most people realize.
        Maybe you’ve started avoiding exercise, sneezing feels risky, or you find yourself scanning for bathrooms wherever you go.
        Whatever your story, know this: you are not alone, and help is available.
      </p>
      <p>
        At Dr. Corinne Sugihara’s clinic, we offer more than medical treatment—we offer understanding.
        Our approach focuses on compassion, listening, and lasting relief, so you can feel confident and in control again.
      </p>
    </div>

     <!-- Subservices Grid -->
    <div class="fade-in mt-16">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center mb-10">
        Explore Our Incontinence Services
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {#each [
          { name: "Stress Incontinence", link: "/treatments/stress-incontinence" },
          { name: "Urge Incontinence", link: "/treatments/urge-incontinence" },
          { name: "Mixed Incontinence", link: "/treatments/mixed-incontinence" },
          { name: "Nocturia Incontinence", link: "/treatments/nocturia-incontinence" },
        ] as service}
          <a href={service.link} class="service-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center transition-transform duration-300">
            <h3 class="text-lg font-semibold text-[#4A0C59]">{service.name}</h3>
            <p class="text-gray-500 mt-2 text-sm">Learn more →</p>
          </a>
        {/each}
      </div>
    </div>

    <!-- Section: Understanding -->
    <div class="fade-in bg-white rounded-3xl shadow-lg p-10 space-y-6">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#6A1B9A]">
        When Bladder Leaks Start to Control Your Life
      </h2>
      <p class="text-gray-700 leading-relaxed">
        You shouldn’t have to plan your day around bathroom breaks—or live in fear of an unexpected leak when you laugh, cough, or exercise.
        Millions of women experience this, especially after childbirth, during perimenopause, or as hormone levels change with age.
        Bladder leaks are not something you have to “just live with.” You deserve understanding, answers, and real, lasting solutions.
      </p>
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

    <!-- Section: Causes -->
    <div class="fade-in space-y-8">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">What Causes Bladder Leaks—and How We Help</h2>
      <p class="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        Leaking bladder issues can stem from weakened pelvic muscles, hormonal changes, nerve signals, or even stress.
        Dr. Sugihara uses advanced diagnostics and a whole-person approach to uncover what’s really behind your symptoms.
      </p>

      <ul class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700">
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          💪 Pelvic floor strengthening therapies to rebuild muscle tone and control
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          🌸 Hormonal support to restore tissue health and balance
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          🥗 Lifestyle and nutrition guidance that supports urinary health
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          ⚡ Innovative, non-invasive devices proven to improve bladder control
        </li>
      </ul>
    </div>

   

    <!-- CTA -->
    <div class="fade-in text-center space-y-6 max-w-3xl mx-auto">
      <p class="text-xl font-medium text-gray-800">
        You don’t have to suffer in silence—or let bladder leaks steal moments of joy from your life.
        The right treatment can help you regain confidence and freedom.
      </p>
      <button class="cta-button bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
        Schedule a Private Consultation
      </button>
    </div>
  </div>
</section>

<style>
  .gradient-text {
    background: linear-gradient(90deg, #b388eb, #f0a6ca, #fec8d8, #b388eb);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
