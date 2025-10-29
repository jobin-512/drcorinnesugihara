<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/18.png"
  import m1 from "$lib/assets/breast-cancer-survivors/1.png"
  import m2 from "$lib/assets/breast-cancer-survivors/2.jpg"

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Floating background parallax
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

    // Fade-in content
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

    // Button glow animation
    const cta = document.querySelector(".cta-button");
    if (cta) {
      cta.addEventListener("mouseenter", () => {
        gsap.to(cta, {
          boxShadow: "0 0 25px rgba(198, 107, 255, 0.6)",
          duration: 0.4,
        });
      });
      cta.addEventListener("mouseleave", () => {
        gsap.to(cta, {
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.4,
        });
      });
    }
  });
</script>

<section class="relative overflow-hidden bg-[#FFF9FC] text-[#4A0C59] py-20 px-6">
  <!-- Floating blurred background shapes -->
  <div class="bg-shape absolute w-96 h-96 top-24 left-20 rounded-full bg-[#F5C6F8] blur-[100px] opacity-25"></div>
  <div class="bg-shape absolute w-80 h-80 bottom-20 right-24 rounded-full bg-[#CBB8F9] blur-[100px] opacity-25"></div>

  <div class="relative z-10 max-w-5xl mx-auto space-y-16">
    <!-- HERO SECTION -->
    <div class="text-center fade-in">
      <h1 class="gradient-text text-4xl md:text-6xl font-bold mb-6">
        Breast Cancer Survivors Care
      </h1>
      <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Compassionate Recovery, Personalized Healing, Lifelong Support
      </p>
      <p class="mt-2 text-sm text-gray-500 italic">
        Dr. Corinne Sugihara, Women’s Health & Wellness Specialist
      </p>
    </div>

    <!-- IMAGE / VISUAL BLOCK -->
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
      <img src={img} alt="">
    </div>

    <!-- INTRO -->
    <div class="fade-in space-y-6 text-gray-700 text-lg leading-relaxed">
      <p>
        After breast cancer, many women find themselves asking—“What now?” You’ve fought through diagnosis,
        treatment, and possibly surgery, but recovery doesn’t end when treatment does. Your body is healing,
        your emotions are shifting, and your sense of self deserves gentle, ongoing care.
      </p>
      <p>
        At Dr. Corinne Sugihara’s clinic, we understand that survivorship is more than medical follow-up—it’s
        about restoring confidence, comfort, and connection with your body. Our <strong>comprehensive breast
        cancer survivors care</strong> helps you rebuild from the inside out, honoring your strength and supporting
        long-term well-being.
      </p>
    </div>

        <!-- Sub-Service Redirect Grid -->
    <div class="fade-in mt-16 mb-16">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center mb-10 ">
        Explore Our Mommy Makeover Treatments
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {#each [
          { name: "Vaginal Dryness", link: "/treatments/diastasis-recti" },
          { name: "Recurrent UTIs", link: "/treatments/recurrent-utis" },
        ] as service}
          <a href={service.link} class="service-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center transition-transform duration-300">
            <h3 class="text-lg font-semibold text-[#4A0C59]">{service.name}</h3>
            <p class="text-gray-500 mt-2 text-sm">Learn more →</p>
          </a>
        {/each}
      </div>
    </div>

    <!-- SECTION: Emotional Tone -->
    <div class="fade-in bg-white rounded-3xl shadow-lg p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A]">
        You’ve Come Through So Much—Now It’s Time to Heal, Fully
      </h2>
      <p>
        Surviving breast cancer is not the end of your journey—it’s the beginning of a new chapter. You’ve faced the
        fear, the uncertainty, and the challenges of treatment. Now, your body and spirit deserve compassionate
        attention and expert guidance to truly heal.
      </p>
      <p>
        You’re not just a patient. You’re a survivor, and you deserve a care plan that honors everything your body has endured.
      </p>
    </div>

    <!-- SECTION: Holistic, Personalized Care -->
    <div class="fade-in space-y-8">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">
        Holistic, Personalized Care for Every Stage of Recovery
      </h2>
      <p class="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
        Dr. Sugihara understands that every woman’s recovery is unique. Whether you’ve completed chemotherapy,
        undergone surgery, or are living with side effects, our <strong>post-breast cancer survivor care clinic</strong>
        provides gentle, evidence-based solutions for physical and emotional healing.
      </p>
      <ul class="grid md:grid-cols-2 gap-6 text-gray-700">
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          🌸 Post-surgical comfort and healing support
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          💜 Hormonal balance & perimenopausal guidance after treatment
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          ✨ Scar care & skin health following surgery or radiation
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          🌿 Pelvic floor & urinary wellness (for those with pelvic therapy needs)
        </li>
        <li class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          🧘‍♀️ Mind-body therapies for relaxation & energy restoration
        </li>
      </ul>
    </div>

    <!-- SECTION: Reconstruction & Survivorship -->
    <div class="fade-in bg-[#FDFBFE] rounded-3xl shadow-md p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A]">
        Rebuilding Confidence Through Breast Reconstruction & Survivorship Care
      </h2>
      <p>
        Breast reconstruction & survivorship care is deeply personal. For many women, it represents reclaiming identity,
        femininity, and wholeness after a long journey. Dr. Sugihara’s approach blends medical precision with genuine
        compassion, ensuring every decision feels right for you.
      </p>
      <p>
        Our breast cancer survivors' follow-up care includes restorative therapies and integrative wellness options to
        help you feel truly at home in your body again.
      </p>
    </div>

    <!-- SECTION: Long-Term Health -->
    <div class="fade-in space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">
        Long-Term Health for Breast Cancer Survivors
      </h2>
      <p class="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
        Being a long-term breast cancer survivor means focusing on total health—heart, bones, hormones, and emotional well-being.
        From holistic hormone support to nutritional counseling and movement guidance, we help you live with strength, vitality, and joy.
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
    

    <!-- SECTION: Compassion -->
    <div class="fade-in bg-white rounded-3xl shadow-lg p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">
        Where Compassion Meets Medical Excellence
      </h2>
      <p class="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        At the heart of our holistic care for breast cancer survivors is one belief: you deserve to feel safe, seen,
        and supported every step of the way. Dr. Sugihara combines deep medical expertise with genuine empathy to ensure
        your recovery is not only physical—but emotional and empowering.
      </p>
    </div>

    <!-- CTA -->
    <div class="fade-in text-center space-y-6 max-w-3xl mx-auto">
      <p class="text-xl font-medium text-gray-800">
        You’ve already shown incredible courage. Now let us help you rebuild—stronger, healthier, and more radiant than ever.
      </p>
      <button class="cta-button bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
        Schedule Your Consultation
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
