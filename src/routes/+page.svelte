<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  import hero from "$lib/assets/home/hero.webp";
  import s1 from "$lib/assets/home/s1.png";
  import s2 from "$lib/assets/home/s2.png";
  import s3 from "$lib/assets/home/s3.png";
  import s4 from "$lib/assets/home/s4.png";
  import mission from "$lib/assets/home/mission.png";
  import doctor from "$lib/assets/home/doctor.webp";
  import t1 from "$lib/assets/home/t1.webp";
  import ask from "$lib/assets/home/ask.webp";

  import Article from "$lib/components/article.svelte";
  import Cta from "$lib/components/cta.svelte";

  onMount(() => {
    // 🌸 ENTRY ANIMATIONS
    gsap.from(".hero-section h1, .hero-section p", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-section img", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.5,
    });

    // 🌟 Gradient Text Reveal
    gsap.utils.toArray(".gradient-text").forEach((el: any) => {
      gsap.fromTo(
        el,
        { backgroundPosition: "200% 0" },
        {
          backgroundPosition: "-200% 0",
          duration: 2,
          repeat: -1,
          ease: "linear",
        }
      );
    });

    // 🌿 SCROLL-TRIGGERED SECTION ANIMATIONS
    gsap.utils.toArray(".reveal").forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // 💫 Floating Hero Image
    gsap.to(".hero-float", {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 🌿 Hover Card Animations
    document.querySelectorAll(".hover-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, scale: 1.05, rotation: 1, duration: 0.3, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, rotation: 0, duration: 0.3, ease: "power1.inOut" });
      });
    });

    // 🌟 Button Hover Glow
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          boxShadow: "0px 10px 25px rgba(126,87,194,0.6)",
          y: -3,
          duration: 0.3,
          ease: "power1.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          y: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      });
    });

    // 🌸 Staggered Testimonials Animation
    gsap.utils.toArray(".testimonial-card").forEach((card: any, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        rotation: -2,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });

    // 🌿 Parallax Background Shapes
    gsap.utils.toArray(".bg-shape").forEach((shape: any, i) => {
      gsap.to(shape, {
        y: "+=" + (i % 2 === 0 ? 20 : -20),
        x: "+=" + (i % 2 === 0 ? 20 : -20),
        duration: 5 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });
</script>

<section class="relative hero-section overflow-hidden bg-[#FFE9F6]">
  <!-- Floating background shapes -->
  <div class="absolute w-32 h-32 bg-purple-200 rounded-full opacity-30 top-10 left-10 bg-shape"></div>
  <div class="absolute w-48 h-48 bg-pink-300 rounded-full opacity-20 bottom-10 right-20 bg-shape"></div>

  <div class="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
    <div class="text-center lg:text-left mb-12 lg:mb-0 text-[#4A0C59]">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 gradient-text bg-gradient-to-r from-purple-700 via-pink-500 to-purple-400 bg-clip-text text-transparent">
        We help you look and feel your very best, <br class="hidden md:inline" />without surgery!
      </h1>
      <p class="text-lg mb-8">
        At Dr. Corinne Sugihara, we are dedicated to assisting you through all stages of your life, because we understand the impact your health can have on your day to day activities as well as your confidence.
      </p>
      <button class="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 relative overflow-hidden">
        Book a Free Consultation
        <span class="shine"></span>
      </button>
    </div>

    <div class="relative flex justify-center items-center">
      <img src={hero} alt="Woman relaxing" class="hero-float max-w-full min-w-[500px] h-fit w-auto" />
    </div>
  </div>
</section>




<section class="reveal py-16 bg-white">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-[#4A0C59] mb-4 gradient-text bg-gradient-to-r from-purple-700 via-pink-500 to-purple-400 bg-clip-text text-transparent">
      Our Treatments
    </h2>
    <p class="text-md text-gray-600 max-w-2xl mx-auto mb-8">
      At Dr. Corinne Sugihara, we have made it our mission to assist women in all stages of their lives to feel happy, healthy and confident.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <!-- Use your existing treatment cards here -->
      <!-- Treatment Card 1 -->
      <div
        class="hover-card relative bg-[#4A0C59] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s1}
          alt="Treatment 1"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b to-[#4A0C59] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-white text-left p-6 space-y-2 font-semibold">
            <li class="font-bold">After Childbirth / Non-Invasive Mommy Makeover</li>
            <li>Diastasis Recti</li>
            <li>Body Contouring</li>
            <li>Skin Tightening</li>
            <li>Bladder Leaks</li>
            <li>Vaginal Laxity</li>
            <li>Vaginal Dryness</li>
            <li>Labial Hypertrophy</li>
          </ul>
        </div>
        <div class="p-6 text-[#C787D5] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">After Childbirth / Non-Invasive Mommy Makeover</h3>
        </div>
      </div>

      <!-- Treatment Card 2 -->
      <div
        class="hover-card relative bg-[#E6A9C8] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s2}
          alt="Treatment 2"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b to-[#E6A9C8] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] font-semibold text-left p-6 space-y-2 ">
            <li class="font-bold">Bladder Leaks and Incontinence</li>
            <li>Stress Incontinence</li>
            <li>Urge Incontinence</li>
            <li>Mixed Incontinence</li>
            <li>Nocturia Incontinence</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Bladder Leaks and Incontinence</h3>
        </div>
      </div>

      <!-- Treatment Card 3 -->
      <div
        class="hover-card relative bg-[#A0E2E6] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s3}
          alt="Treatment 3"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b to-[#A0E2E6] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] font-semibold text-left p-6 space-y-2">
            <li class="font-bold">Perimenopause and Menopause</li>
            <li>Bladder Leaks</li>
            <li>Skin Tightening</li>
            <li>Vaginal Dryness</li>
            <li>Body Contouring</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Perimenopause and Menopause</h3>
        </div>
      </div>

      <!-- Treatment Card 4 -->
      <div
        class="hover-card relative bg-[#D0A9E6] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s4}
          alt="Treatment 4"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b to-[#D0A9E6] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] font-semibold text-left p-6 space-y-2">
            <li class="font-bold">Breast Cancer Survivors</li>
            <li>Vaginal Dryness</li>
            <li>Recurrent UTIs</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Breast Cancer Survivors</h3>
        </div>
      </div>
      </div>
    </div>
</section>


<section class="reveal py-16 bg-[#F1F0FF] text-[#4C6583] font-semibold">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Left Content - Text and Button -->
    <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
      <h2 class="text-lg font-semibold text-[#4A0C59] mb-2">Our Mission</h2>
      <h3 class="text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-6 text-[#0F204E]">
        Our Medicine For Good Health
      </h3>
      <p class="text-lg mb-4">
        At Dr. Corinne Sugihara, we have made it our mission to assist women in all
        stages of their lives to feel happy, healthy and confident in the way
        they look and feel.
      </p>
      <p class="text-lg mb-4">
        Our founder, Dr. Corinne Sugihara, specialized as an OB/GYN
        for over 35 years and has delivered thousands of babies.
        During her career she saw a need for women to be taken
        care of and with advancements in
        technology, she opened Dr. Corinne Sugihara so she could do just
        that.
      </p>
      <p class="text-lg mb-8">
        After having a conversation about your concerns and goals
        during your consultation, Dr. Sugihara will provide you with
        an individualized treatment plan to address your specific
        needs and get you the results you desire.
      </p>
      <button class="bg-[#4A0C59] hover:bg-[#3A094A] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center lg:inline-flex">
        Learn More About Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Right Content - Image -->
    <div class="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
      <img
        src={mission}
        alt="Our Mission"
        class="max-w-full h-auto rounded-lg "
      />
    </div>
  </div>
</section>


<section class="reveal py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
    <div class="md:w-1/2 flex justify-center">
      <div class="relative  overflow-hidden flex items-center justify-center p-4">
        <img src={doctor} alt="Dr. Corinne Sugihara" class=" w-fit h-full object-cover" />
    </div>
    </div>

    <div class="md:w-1/2 text-center md:text-left">
      <p class="text-lg text-[#5C2869] font-semibold mb-2">About Dr. Corinne Sugihara</p>
      <h2 class="text-4xl md:text-5xl font-extrabold text-[#00234C] mb-4 leading-tight">Hello This Is Dr. Corinne Sugihara, MD</h2>
      <p class="text-xl text-[#5C2869] font-medium mb-6">MEDICAL DIRECTOR, FOUNDER</p>
      <p class="text-[#708399] mb-4">
        As a woman, at any given time, you may be called upon to be a mother, lover, friend, cook, companion, caretaker, cleaner, or breadwinner.
      </p>
      <p class="text-[#708399] mb-4">
        You’re expected to fulfill all these roles effortlessly, with expertise and grace. While the demands for self sacrifice can be never ending, the opportunities for self care can slip from slim to none.
      </p>
      <p class="text-[#708399] mb-6">
        That’s why at Dr. Corinne Sugihara, we offer non-surgical, energy based micro treatments that treat your aesthetics and wellness concerns. Downtime is minimized and your body is stimulated to improve and repair itself without drugs, toxins or fillers. That way, your body looks and feels more like it used to so you can continue to do all the things you love.
      </p>
      <p class="text-[#708399] mb-6">
        That’s why at Dr. Corinne Sugihara, we offer non-surgical, energy based micro treatments that treat your aesthetics and wellness concerns. Downtime is minimized and your body is stimulated to improve and repair itself without drugs.
      </p>
      <button class="bg-[#4A0C59] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 flex items-center justify-center mx-auto md:mx-0">
        Learn More About Me
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>


<section class="reveal py-16 bg-[#FEEEF1]">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-[#4A0C59] mb-4">People Say About Us</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="testimonial-card">
        <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={t1} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Skin Tightening</p>
      </div>
      </div>
      <div class="testimonial-card">
        <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={s3} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Skin Tightening</p>
      </div>
      </div>
      <div class="testimonial-card">
        <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={s2} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Skin Tightening</p>
      </div>
      </div>
    </div>
  </div>
</section>

<section class="reveal py-16 bg-[#E5E5E5]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Image Section -->
    <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
      <img src={ask} alt="EvolveX Club" class="rounded-lg shadow-lg max-w-full h-auto" />
    </div>

    <!-- Content Section -->
    <div class="lg:w-1/2 text-center lg:text-left lg:pl-12">
      <h2 class="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#4A0C59] leading-tight mb-6">
        Ask About EvolveX <br class="hidden md:inline" />Club
      </h2>
      <p class="text-lg text-gray-700 mb-8">
        Our monthly subscription that allows you to get in shape and stay in shape
      </p>
      <button class="bg-[#7E57C2] hover:bg-[#673AB7] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center lg:inline-flex">
        Learn About EvolveX Club
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>


<Cta/>

<Article/>



<style>
 :global(.shine) {
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.0) 80%);
    transform: skewX(-25deg);
    animation: shimmer 3s infinite;
  }
  @keyframes shimmer {
    0% { left: -75%; }
    50% { left: 125%; }
    100% { left: 125%; }
  }

  .gradient-text {
    background-size: 200% 200%;
  }

  button {
    position: relative;
    overflow: hidden;
  }

</style>