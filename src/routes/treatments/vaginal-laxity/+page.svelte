<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/15.png"
  import m1 from "$lib/assets/bladder-leaks/1.png"
  import m2 from "$lib/assets/bladder-leaks/2.jpg"
  import m3 from "$lib/assets/bladder-leaks/3.jpg"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Vaginal Laxity Treatment in Newport Beach";
  let intro: string = `Restore comfort, confidence, and connection—with care that truly understands you.`;
  let body: string = `
You know your body better than anyone. So when things start to feel different—less tight, less responsive, less you—you notice. Vaginal laxity is more common than most women realize, often caused by childbirth, aging, or hormonal changes. But just because it’s common doesn’t mean you have to live with it.

At Dr. Corinne Sugihara’s practice in Newport Beach, vaginal laxity treatment is never just about appearance—it’s about restoring how you feel in your own body. With compassionate, judgment-free care, Dr. Sugihara listens to your concerns and creates a personalized plan to improve vaginal comfort and elasticity while reducing irritation, dryness, and discomfort.

Through advanced, non-surgical vaginal tightening and Morpheus8 V vaginal rejuvenation, you can enjoy meaningful vaginal tightness improvement, increased moisture, and better sensation—without surgery or downtime. These gentle, effective intimate wellness treatments for women work by naturally stimulating collagen and improving tissue tone to help you feel more confident and connected again.

Whether you’re seeking treatments for vaginal laxity after childbirth or simply want to enhance vaginal comfort and confidence, Dr. Sugihara offers leading vaginal rejuvenation and vaginal discomfort solutions designed around your needs—not just your symptoms.

Because you deserve to feel vibrant, supported, and fully yourself at every stage of life. Discover compassionate women’s intimate health solutions in CA with Dr. Corinne Sugihara—your trusted expert in non-surgical vaginal rejuvenation in California.

Rediscover confidence. Restore comfort. Reclaim you. 
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
