<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Parallax floating shapes
    gsap.to(".bg-shape", {
      y: 50,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1.5,
    });

    // Gradient text reveal
    gsap.fromTo(
      ".gradient-text",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gradient-text",
          start: "top 85%",
        },
      }
    );

    // Fade-in staggered content
    gsap.utils.toArray(".fade-in").forEach((el: any, i: number) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });

    // CTA hover glow
    const cta = document.querySelector(".cta-button");
    if (cta) {
      cta.addEventListener("mouseenter", () =>
        gsap.to(cta, {
          boxShadow: "0 0 25px rgba(198,107,255,0.6)",
          duration: 0.4,
        })
      );
      cta.addEventListener("mouseleave", () =>
        gsap.to(cta, { boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.4 })
      );
    }
  });
</script>

<section class="relative overflow-hidden bg-[#FFF9FC] text-[#4A0C59] py-20 px-6">
  <!-- Floating shapes -->
  <div class="bg-shape absolute w-[450px] h-[450px] top-20 left-16 bg-[#F5C6F8] blur-[120px] rounded-full opacity-25"></div>
  <div class="bg-shape absolute w-[380px] h-[380px] bottom-16 right-20 bg-[#CBB8F9] blur-[100px] rounded-full opacity-30"></div>

  <div class="relative z-10 max-w-5xl mx-auto space-y-16">
    <!-- HERO -->
    <div class="text-center fade-in">
      <h1 class="gradient-text text-4xl md:text-6xl font-bold mb-4">
        Perimenopause & Menopause Treatment in Newport Beach
      </h1>
      <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Relief. Balance. Renewal — Because You Deserve to Feel Like Yourself Again.
      </p>
    </div>

    <!-- IMAGE / HEADER VISUAL -->
    <div class="w-full h-80 bg-gray-100/40 rounded-3xl flex items-center justify-center text-gray-400 italic fade-in">
      [Insert serene feminine photo or gradient illustration]
    </div>

    <!-- INTRO -->
    <div class="fade-in space-y-6 text-gray-700 text-lg leading-relaxed">
      <p>
        Perimenopause and menopause aren’t just medical transitions — they’re deeply personal seasons of change.
        Maybe your moods are shifting, your sleep slipping away, or your energy disappearing without warning.
        Maybe your body feels foreign — hot flashes, weight changes, irregular cycles — and no one really listens
        when you say, “I don’t feel like myself.”
      </p>
      <p>
        At <strong>Dr. Corinne Sugihara’s women’s health clinic in Newport Beach</strong>, you’ll find more than just
        answers — you’ll find understanding. Dr. Sugihara listens deeply, honors your experience, and creates
        personalized, compassionate plans that restore balance and joy to your life.
      </p>
    </div>

    <!-- SECTION: RELATED TREATMENTS -->
    <div class="fade-in pt-16">
      <h3 class="text-center text-2xl font-semibold text-[#6A1B9A] mb-8">
        Related Treatments
      </h3>
      <div class="grid md:grid-cols-4 gap-6">
        {#each [
          { title: "Bladder Leaks", link: "/treatments/bladder-leaks" },
          { title: "Skin Tightening", link: "/treatments/skin-tightening" },
          { title: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
          { title: "Body Contouring", link: "/treatments/body-contouring" }
        ] as t}
          <a
            href={t.link}
            class="group p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-center transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h4 class="text-[#6A1B9A] font-semibold text-lg mb-2 group-hover:text-[#4A0C59] transition">
              {t.title}
            </h4>
            <p class="text-sm text-gray-500">Explore treatment →</p>
          </a>
        {/each}
      </div>
    </div>

    <!-- SECTION: Understanding Perimenopause -->
    <div class="fade-in bg-white rounded-3xl shadow-lg p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A]">Understanding Perimenopause</h2>
      <p>
        Perimenopause can begin years before menopause — often in your 40s, sometimes earlier. It’s your body’s
        gradual shift as hormones fluctuate and begin to decline, bringing unpredictable changes: mood swings,
        night sweats, fatigue, anxiety, low libido, brain fog, irregular periods, and more.
      </p>
      <p>
        If you’ve been searching for “<strong>perimenopause treatment near me</strong>,” you’ve likely been told it’s
        “just stress” or “part of aging.” You deserve more. You deserve clarity, comfort, and control again.
      </p>
      <p>
        Dr. Sugihara offers <strong>comprehensive perimenopause treatment</strong> based on your unique hormone profile,
        lifestyle, and goals — from natural therapies to advanced hormone care.
      </p>
    </div>

    <!-- SECTION: Hormone Care -->
    <div class="fade-in space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A] text-center">Finding Balance Through Hormone Care</h2>
      <p class="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
        For many women, restoring balance begins with <strong>bioidentical hormone replacement therapy</strong>. When
        tailored precisely — as it is by Dr. Sugihara — this therapy gently restores estrogen, progesterone, and
        testosterone to support your mood, energy, and overall well-being.
      </p>
      <p class="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
        This isn’t one-size-fits-all. Every plan is customized to your body’s rhythm, helping relieve discomfort and
        restore natural harmony. You’ll feel the difference — deeper sleep, fewer hot flashes, steadier moods, and
        a renewed sense of yourself.
      </p>
    </div>

    <!-- SECTION: Compassionate Care -->
    <div class="fade-in bg-[#FDFBFE] rounded-3xl shadow-md p-10 space-y-6">
      <h2 class="text-3xl font-semibold text-[#6A1B9A]">
        Compassionate Menopause Care That Works
      </h2>
      <p>
        At our menopause relief clinic, every concern is heard and validated. Whether you’re navigating your first
        hot flash or have struggled for years, Dr. Sugihara offers a clear path toward lasting relief — blending
        medical expertise with genuine compassion so you can embrace this new phase of life with strength and grace.
      </p>
      <p>
        From <strong>female hormone imbalance treatment</strong> to integrative wellness and lifestyle support,
        you’ll receive care that empowers you to thrive.
      </p>
    </div>

    <!-- SECTION: CTA -->
    <div class="fade-in text-center space-y-6 max-w-3xl mx-auto">
      <p class="text-xl font-medium text-gray-800">
        You don’t have to simply “get through” perimenopause or menopause. With the right care, you can thrive through it.
      </p>
      <p class="text-lg text-gray-700">
        If you’re ready to feel vibrant, clear-headed, and comfortable again, schedule a consultation at our Newport Beach clinic.
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
