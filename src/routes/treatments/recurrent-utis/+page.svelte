<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let title: string = "Recurrent UTIs";
  let intro: string = `Recurrent UTI Treatment for Women — Relief, Understanding & Lasting Solutions with Dr Corinne Sugihara`;
  let body: string = `
If you’re struggling with recurrent UTIs, you’re not alone—and you’re not imagining it. The burning, the urgency, the endless cycles of antibiotics—then that sinking feeling when symptoms return. Living with recurrent UTI in females can be exhausting, embarrassing, and deeply frustrating, especially when you’ve been told “it’s just another infection.” At Dr Corinne Sugihara’s female recurrent UTI clinic, you’ll find a different kind of care—one that listens first and treats the whole you, not just your lab results.

Dr Sugihara understands how repeated urinary tract infections can take a toll on your comfort, confidence, and quality of life. Her personalized recurrent UTI treatment approach combines advanced urinary tract infection treatment options with compassionate, judgment-free care. She looks beyond the surface—exploring hormonal changes, pelvic floor health, microbiome balance, and lifestyle triggers that may contribute to chronic UTI women’s health care concerns.

Here, your symptoms are never minimized. You’ll receive recurrent UTIs treatment for women that focuses on long-term UTI prevention and management services—helping you break free from constant discomfort and fear of relapse. With Dr Sugihara, you gain a partner who genuinely cares, listens deeply, and helps you restore confidence in your body again.

If you’re ready to finally stop the cycle and find lasting comfort, schedule your consultation today with a trusted frequent urinary tract infections specialist who truly understands. Your journey toward relief and renewed well-being starts here—with expert urinary tract infection relapse support that feels personal, empowering, and full of hope.
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
