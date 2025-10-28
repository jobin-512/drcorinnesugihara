<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to(".bg-shape", {
      y: 40,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { amount: 2 },
    });

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

    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          boxShadow: "0 0 35px rgba(221, 152, 255, 0.4)",
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  });
</script>

<section class="relative overflow-hidden bg-[#FFF8FC] text-[#4A0C59] py-20 px-6">
  <!-- Floating background gradient shapes -->
  <div class="bg-shape bg-[#F8D8F9] w-96 h-96 top-16 left-16 absolute rounded-full blur-[100px] opacity-25"></div>
  <div class="bg-shape bg-[#C9B8F8] w-80 h-80 bottom-10 right-24 absolute rounded-full blur-[100px] opacity-25"></div>

  <div class="max-w-6xl mx-auto relative z-10 space-y-16">
    <!-- HERO -->
    <div class="text-center fade-in">
      <h1 class="gradient-text text-4xl md:text-6xl font-bold mb-6">
        Non-Invasive Mommy Makeover Near Me
      </h1>
      <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Rediscover your confidence, comfort, and connection with your body—no surgery, no downtime.
      </p>
    </div>

    <!-- Hero image placeholder -->
    <div class="w-full h-80 bg-gray-100/40 rounded-3xl flex items-center justify-center text-gray-400 italic fade-in">
      [Insert relevant soft illustration or photo]
    </div>

    <!-- INTRO -->
    <div class="space-y-6 fade-in max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
      <p>
        Motherhood changes everything—including your body. From stretched skin and weakened muscles to vaginal changes and bladder leaks,
        it’s normal to feel a little disconnected from the woman you see in the mirror.
      </p>
      <p>
        At Dr. Corinne Sugihara’s women’s health practice, we offer a <strong>Non-Invasive Mommy Makeover</strong>
        designed to help you feel like yourself again—strong, confident, and comfortable in your own skin.
      </p>
    </div>

        <!-- Sub-Service Redirect Grid -->
    <div class="fade-in mt-16 mb-16">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center mb-10 ">
        Explore Our Mommy Makeover Treatments
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {#each [
          { name: "Diastasis Recti", link: "/treatments/diastasis-recti" },
          { name: "Body Contouring", link: "/treatments/body-contouring" },
          { name: "Skin Tightening", link: "/treatments/skin-tightening" },
          { name: "Bladder Leaks", link: "/treatments/bladder-leaks" },
          { name: "Vaginal Laxity", link: "/treatments/vaginal-laxity" },
          { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
          { name: "Labial Hypertrophy", link: "/treatments/labial-hypertrophy" },
        ] as service}
          <a href={service.link} class="service-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center transition-transform duration-300">
            <h3 class="text-lg font-semibold text-[#4A0C59]">{service.name}</h3>
            <p class="text-gray-500 mt-2 text-sm">Learn more →</p>
          </a>
        {/each}
      </div>
    </div>

    <!-- Compassionate Care -->
    <div class="fade-in bg-white rounded-3xl shadow-lg p-10 space-y-6">
      <h2 class="text-2xl md:text-3xl font-semibold text-[#6A1B9A]">
        Compassionate, Personalized Care—Designed for Real Women
      </h2>
      <p class="text-gray-700 leading-relaxed">
        Your journey through pregnancy and childbirth was nothing short of extraordinary. If you’re experiencing issues like skin laxity,
        diastasis recti, or vaginal dryness, you’re not alone—and you deserve compassionate care that honors your story.
      </p>
      <p>
        Dr Sugihara listens deeply and provides non-judgmental, restorative treatments tailored to your body’s unique needs—no surgery, just real results.
      </p>
    </div>

    <!-- Treatment Types -->
    <div class="space-y-10 fade-in">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">
        Gentle, Effective Treatments for Every Concern
      </h2>
      <div class="space-y-8 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
        <p>
          Our non-surgical mommy makeover options use advanced technology to safely and effectively rejuvenate your body—inside and out.
        </p>

        <ul class="list-disc pl-6 space-y-3">
          <li>
            <strong>After Childbirth Body Treatment & Contouring :</strong>
            Target sagging skin, stubborn fat, and muscle separation. We offer non-surgical
            diastasis recti repair to help your core feel strong and supported.
          </li>
          <li>
            <strong>Vaginal Rejuvenation Treatments :</strong>
            Restore sensation and comfort with gentle tightening and vaginal dryness treatments.
            We also offer labial hypertrophy correction and vaginal laxity treatment options.
          </li>
          <li>
            <strong>Bladder Leak Treatment for Women :</strong>
            Improve pelvic floor tone and bladder control without surgery or downtime—so you can move freely again.
          </li>
        </ul>
      </div>
    </div>

    <!-- Benefits -->
    <div class="fade-in bg-white rounded-3xl shadow-md p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">
        The Beauty of a Mommy Makeover Without Surgery
      </h2>
      <ul class="grid md:grid-cols-3 gap-6 text-center text-gray-700">
        <li class="p-6 bg-gray-50 rounded-2xl shadow-sm">✨ Safe & non-surgical – no incisions or anesthesia</li>
        <li class="p-6 bg-gray-50 rounded-2xl shadow-sm">⏰ Quick & convenient – most sessions under an hour</li>
        <li class="p-6 bg-gray-50 rounded-2xl shadow-sm">🌸 Natural & empowering – your body, rejuvenated from within</li>
      </ul>
    </div>



    <!-- CTA -->
    <div class="fade-in text-center space-y-6 max-w-3xl mx-auto">
      <p class="text-xl font-medium text-gray-800">
        It’s time to feel like you again. With gentle, customized after-pregnancy body restoration treatments,
        Dr Sugihara helps women embrace their post-baby bodies with pride and joy.
      </p>
      <button class="cta-button bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
        Book Your Consultation
      </button>
    </div>
  </div>
</section>

<style>
  .gradient-text {
    background: linear-gradient(90deg, #c08ef9, #f0a6ca, #fec8d8, #c08ef9);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
