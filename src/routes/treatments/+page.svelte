<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import s1 from "$lib/assets/services/1.png";
  import s2 from "$lib/assets/services/2.png";
  import s3 from "$lib/assets/services/3.png";
  import s4 from "$lib/assets/services/4.png";
  import s5 from "$lib/assets/services/5.png";
  import s6 from "$lib/assets/services/6.png";
  import s7 from "$lib/assets/services/7.png";
  import s8 from "$lib/assets/services/8.png";
  import s9 from "$lib/assets/services/9.png";
  import s10 from "$lib/assets/services/10.png";
  import s11 from "$lib/assets/services/11.png";
  import hero from "$lib/assets/services/s1.png";
  import hero2 from "$lib/assets/services/s2.png";

  gsap.registerPlugin(ScrollTrigger);

  interface Service {
    title: string;
    desc: string;
    color: string;
    icon: string;
    link: string;
  }

  interface TreatmentCategory {
    title: string;
    items: { name: string; link: string }[];
  }

  const categories: TreatmentCategory[] = [
    {
      title: "After Childbirth / Non-Invasive Mommy Makeover",
      items: [
        { name: "Diastasis Recti", link: "/treatments/diastasis-recti" },
        { name: "Skin Tightening", link: "/treatments/skin-tightening" },
        { name: "Body Contouring", link: "/treatments/body-contouring-and-fat-reduction" },
        { name: "Bladder Leaks", link: "/treatments/bladder-leaks" },
        { name: "Vaginal Laxity", link: "/treatments/vaginal-laxity" },
        { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
        { name: "Labial Hypertrophy", link: "/treatments/labial-hypertrophy" },
      ],
    },
    {
      title: "Bladder Leaks and Incontinence",
      items: [
        { name: "Stress", link: "/treatments/bladder-leaks/stress-incontinence" },
        { name: "Urge", link: "/treatments/bladder-leaks/urge-incontinence" },
        { name: "Mixed", link: "/treatments/bladder-leaks/mixed-incontinence" },
        { name: "Nocturia", link: "/treatments/bladder-leaks/nocturia" },
      ],
    },
    {
      title: "Perimenopause and Menopause",
      items: [
        { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
        { name: "Bladder Leaks", link: "/treatments/bladder-leaks" },
        { name: "Skin Tightening", link: "/treatments/skin-tightening" },
        { name: "Body Contouring", link: "/treatments/body-contouring-and-fat-reduction" },
      ],
    },
    {
      title: "Breast Cancer Survivors",
      items: [
        { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
        { name: "Recurrent UTIs", link: "/treatments/recurrent-utis" },
      ],
    },
    {
      title: "Other Treatments",
      items: [
        { name: "Recurrent UTIs", link: "/treatments/recurrent-utis" },
        { name: "Skin Issues", link: "/treatments/skin" },
        { name: "Cellulite", link: "/treatments/cellulite" },
        { name: "Acne and Acne Scars", link: "/treatments/acne-&-acne-scars" },
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "After Childbirth / Non-Invasive Mommy Makeover",
      desc: "Motherhood changes your body in powerful ways. You may notice loosened skin, stretch marks, vaginal laxity, or weakened abdominal muscles.",
      color: "from-blue-50 to-blue-100",
      icon: s1,
      link: "/after-childbirth-non-Invasive-mommy-makeover",
    },
    {
      title: "Bladder Leaks and Incontinence",
      desc: "You shouldn’t have to cross your legs when you laugh. Bladder leaks and incontinence can follow childbirth, hormonal shifts.",
      color: "from-purple-50 to-purple-100",
      icon: s2,
      link: "/bladder-leaks-&-incontinence",
    },
    {
      title: "Perimenopause and Menopause",
      desc: "Perimenopause and menopause are natural transitions — but that doesn’t mean you have to suffer through them.",
      color: "from-teal-50 to-teal-100",
      icon: s3,
      link: "/perimenopause-and-menopause",
    },
    {
      title: "Breast Cancer Survivors",
      desc: "Healing after breast cancer takes time — physically and emotionally. We honor your journey by offering gentle care designed specifically for survivors.",
      color: "from-rose-50 to-rose-100",
      icon: s4,
      link: "/breast-cancer-survivors",
    },
    {
      title: "Recurrent UTIs",
      desc: "If you’re stuck in the cycle of recurrent UTIs, you deserve lasting relief — not just another prescription.",
      color: "from-orange-50 to-orange-100",
      icon: s5,
      link: "/treatments/recurrent-utis",
    },
    {
      title: "Skin Issues",
      desc: "From hormonal breakouts to post-pregnancy changes, skin issues can affect how you feel about yourself.",
      color: "from-emerald-50 to-emerald-100",
      icon: s6,
      link: "/treatments/skin",
    },
    {
      title: "Fine Lines and Wrinkles",
      desc: "Fine lines tell stories — but you decide how many to keep. Our advanced rejuvenation options smooth them naturally.",
      color: "from-pink-50 to-pink-100",
      icon: s7,
      link: "/treatments/skin",
    },
    {
      title: "Sunspots and Pigmentation",
      desc: "Sun-damaged or uneven skin can make you feel older than you are. We can restore radiance safely and effectively.",
      color: "from-indigo-50 to-indigo-100",
      icon: s8,
      link: "/treatments/skin",
    },
    {
      title: "Skin Tightening",
      desc: "If you’ve noticed sagging or loss of elasticity, skin tightening treatments can help you reclaim firmness and lift — without surgery.",
      color: "from-purple-50 to-purple-100",
      icon: s9,
      link: "/treatments/skin-tightening",
    },
    {
      title: "Cellulite",
      desc: "You’re not alone — cellulite affects nearly every woman, regardless of body type.",
      color: "from-purple-50 to-purple-100",
      icon: s10,
      link: "/treatments/cellulite",
    },
    {
      title: "Scars and Stretch Marks",
      desc: "Our personalized approach focuses on healing, balancing, and improving skin texture for visible renewal.",
      color: "from-teal-50 to-teal-100",
      icon: s11,
      link: "/treatments/skin",
    },
  ];

  onMount(() => {
    // HERO
    gsap.from(".hero-text > *", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(".hero-image img", {
      opacity: 0,
      x: 80,
      scale: 1.1,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out",
    });

    // SCROLL ANIMATIONS
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        delay: i * 0.05,
        ease: "power2.out",
      });
    });

    // FLOATING HERO BACKGROUND EFFECT
    gsap.to(".floating-glow", {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  });
</script>

<!-- HERO -->
<section class="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
  <div class="hero-text flex-1 z-10 space-y-6">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
      Empowering <span class="text-[#4A0C59]">Women's Health</span><br />
      Advanced Care, Delivered with Compassion
    </h1>
    <p class="text-lg text-gray-600 max-w-md">
      You deserve a healthcare partner who listens. We empower women through every stage of their journey with modern medical technology and compassion.
    </p>
    <div class="flex gap-4">
      <button class="btn-primary">Book an Appointment</button>
      <button class="btn-outline">Explore Services</button>
    </div>
  </div>

  <div class="hero-image flex-1 mt-12 md:mt-0 flex justify-center relative">
    <img src={hero} alt="Healthcare illustration" class="w-80 md:w-[60rem]" />
    <div class="floating-glow absolute -z-10 bg-purple-300 w-80 h-80 rounded-full blur-3xl opacity-30 -right-10 top-10"></div>
  </div>
</section>

<!-- APPROACH -->
<section class="fade-in py-24 px-8 md:px-20 bg-[#F1F0FF] relative overflow-hidden">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1 parallax">
      <img src={hero2} alt="approach illustration" class="rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105" />
    </div>
    <div class="flex-1 space-y-6">
      <h2 class="text-4xl font-bold text-gray-800">Restore Confidence. Reclaim Comfort. Redefine You—From the Inside Out.</h2>
      <p class="text-lg text-gray-600">
        At Dr Corinne Sugihara’s Women’s Health, your body’s story matters — of childbirth, healing, and resilience. We help you feel like yourself again — whole and confident.
      </p>
      <p class="text-lg text-gray-600">
        Every treatment begins with a conversation. We listen, without judgment, and build a plan designed not just to treat symptoms but to restore your quality of life.
      </p>
    </div>
  </div>
</section>

<!-- CATEGORY GRID -->
<section class="fade-in py-20 px-6 md:px-20 bg-white">
  <div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
    {#each categories as cat (cat.title)}
      <div class="cat-card">
        <h2>{cat.title}</h2>
        <ul>
          {#each cat.items as item}
            <li><a href={item.link}>{item.name}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<!-- SERVICES -->
<section class="fade-in px-8 md:px-20 py-28 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-gray-800">Personalized, gentle, and effective solutions for every stage of your journey.</h2>
    <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
      Your body has carried you through so much. Now, it’s time to care for it with the same compassion you give to everyone else.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {#each services as s}
      <a href={s.link} class="service-card bg-gradient-to-br {s.color}">
        <img src={s.icon} alt={s.title} />
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </a>
    {/each}
  </div>
</section>

<!-- FOOTER QUOTE -->
<section class="fade-in bg-white border-t border-gray-200 px-8 md:px-20 py-16 text-gray-600 text-center text-sm">
  <div class="max-w-4xl mx-auto leading-relaxed">
    Your comfort and privacy are our priorities. Our in-person model ensures accuracy, empathy, and personalized care — because your health deserves more than a quick click.
  </div>
</section>

<style>
  section {
    scroll-margin-top: 80px;
  }

 
</style>
