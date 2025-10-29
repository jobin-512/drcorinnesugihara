<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import img from "$lib/assets/services/10.png"
  import m1 from "$lib/assets/skin/1.jpg"
  import m2 from "$lib/assets/skin/2.jpg"
  import m3 from "$lib/assets/skin/3.jpg"
  import m4 from "$lib/assets/skin/4.jpg"
  import m5 from "$lib/assets/skin/5.jpg"
  import m6 from "$lib/assets/skin/6.jpg"

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Skin";
  let intro: string = `Advanced Skin Rejuvenation in Newport Beach`;
  let body: string = `
Rediscover radiant, confident skin at Dr Corinne Sugihara’s aesthetic skin clinic—where skin care treatments for women are designed to renew, heal, and empower. From non-surgical skin rejuvenation to personalized skin renewal treatments in Newport Beach, we blend science and compassion to restore your glow. Experience expert skin resurfacing and skin wellness for women at our trusted skin care institute in Newport Beach—because healthy, luminous skin is self-care redefined.

—------------------------------------------------------------------------------------------------------------------
Scars & Stretch Marks Treatment for Women

 Because every woman deserves to feel comfortable in her own skin.
Your skin tells your story—but sometimes, scars and stretch marks can tell a version you don’t feel ready to share. Whether they came from pregnancy, weight changes, surgery, or life itself, you deserve a way to feel confident again. At Dr Corinne Sugihara’s women’s scar clinic in Newport Beach, we offer gentle, effective stretch mark and scar treatment options designed just for women.
Our goal isn’t to erase your story—it’s to help you love the way it looks. Using advanced RF microneedling for scars and customized scar reduction therapy for women, we help reduce the appearance of stretch marks and smooth uneven skin tone without surgery or downtime. Each stretch mark removal treatment is tailored to your skin type, comfort level, and personal goals, so you can feel at ease knowing your care is in expert, compassionate hands.
If you’ve searched for the best treatment for scars and stretch marks, you’ll find it here—where warmth meets precision, and understanding meets results. Our scar therapy for women is designed to restore not only your skin’s texture but also your confidence.
Whether you’re hoping to remove scars and stretch marks or simply want a stretch mark reduction body clinic for women that listens first, Dr Sugihara provides a caring, non-judgmental space for healing and renewal.
Ready to feel good in your skin again?
 Schedule your RF microneedling scars clinic consultation today and discover the best stretch mark and scar removal options tailored for you.
—------------------------------------------------------------------------------------------------------------------

Fine Lines and Wrinkles Treatment in Newport Beach

 Rediscover your natural glow—because confidence never ages.
Time leaves traces on every face, but those fine lines and wrinkles don’t have to define how you feel about yourself. If you’ve been noticing changes around your eyes, mouth, or neck and wish your reflection looked as youthful as you feel inside, you’re not alone—and you deserve options that truly work.
At Dr Corinne Sugihara’s women’s wrinkle clinic in Newport Beach, we offer compassionate, non-surgical wrinkle treatment designed to reduce fine lines and wrinkles safely and naturally. Our goal isn’t to change who you are—it’s to help you look refreshed, confident, and radiant through personalized fine line removal treatment and anti-aging facial treatments for women that honor your unique skin story.
Every plan begins with a thoughtful consultation. Dr Sugihara listens—really listens—to your concerns before recommending gentle, effective options like Morpheus8 wrinkle treatment, facial rejuvenation for fine lines, or neck skin tightening treatment. These advanced therapies stimulate collagen, smooth texture, and restore elasticity—helping you reduce fine lines and wrinkles without surgery or downtime.
Whether you’re exploring non-surgical wrinkle treatment, seeking fine line removal without surgery, or curious about our anti-aging facial treatments, your experience will always be personal, private, and empowering.
It’s time to feel comfortable and confident in your skin again—with expert care that puts your comfort first.
Let’s create your personalized wrinkle reduction treatment today.
 Schedule your consultation at our fine line treatment aesthetics clinic in Newport Beach and rediscover how beautiful your natural glow can be.

—------------------------------------------------------------------------------------------------------------------

Sunspots and Pigmentation Treatment in Newport Beach

 Restore your skin’s natural glow—with care that truly understands you.
You’ve noticed it—the stubborn dark spots that won’t fade no matter how much sunscreen you wear. Whether it’s years of sun exposure, hormonal changes, or simply time, pigmentation and sun spots can make you feel like your skin no longer reflects how vibrant you really are. At Dr Corinne Sugihara’s skin discoloration clinic in Newport Beach, we help women reclaim that confidence with safe, effective, and deeply personalized pigmentation and sun spots care.
Dr Sugihara understands that every mark tells a story—of laughter, sunlight, or resilience—and she approaches every pigmentation removal treatment with empathy and precision. Our most advanced solution, Lumecca IPL pigmentation treatment, targets sun spots pigmentation, freckles, and uneven tone at their source, revealing brighter, smoother, more even skin. For stubborn areas, sunspot removal laser treatment can further reduce discoloration without harsh downtime.
This isn’t just about clearer skin—it’s about feeling comfortable in your own skin again. Our hyperpigmentation treatment for women is customized to your tone, texture, and sensitivity, ensuring gentle, visible, lasting results.
Whether you’re seeking sun damage skin treatment for women, dark spot removal, or complete women’s pigmentation solutions, you’ll find compassionate care that listens first, treats second, and celebrates the beauty of your natural radiance.
Let’s restore your glow—together. Schedule your personalized consultation today and discover how luminous your skin can feel again.

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

    <div class="grid md:grid-cols-2 gap-6">
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m3} alt="skin tightening treatment" class="h-full">
        </div>
        <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m4} alt="skin tightening treatment" class="h-full">
        </div>

    </div>

    <div class="grid md:grid-cols-2 gap-6">
    <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m5} alt="skin tightening treatment" class="h-full">
        </div>
        <div class="w-full h-72 sm:h-96  rounded-3xl shadow-inner fade-in flex items-center justify-center text-gray-400 text-lg italic">
          <img src={m6} alt="skin tightening treatment" class="h-full">
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
