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
  import s12 from "$lib/assets/services/12.png";
  import s13 from "$lib/assets/services/13.png";
  import s14 from "$lib/assets/services/14.png";
  import s15 from "$lib/assets/services/15.png";
  import s16 from "$lib/assets/services/16.png";
  import s17 from "$lib/assets/services/17.png";
  import s18 from "$lib/assets/services/18.png";
  import s19 from "$lib/assets/services/19.png";
  import s20 from "$lib/assets/services/20.png";
  import s21 from "$lib/assets/services/21.png";
  import s22 from "$lib/assets/services/22.png";
  import s23 from "$lib/assets/services/23.png";
  import s24 from "$lib/assets/services/24.png";
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
        { name: "Body Contouring", link: "/treatments/body-contouring" },
        { name: "Bladder Leaks", link: "/treatments/bladder-leaks" },
        { name: "Vaginal Laxity", link: "/treatments/vaginal-laxity" },
        { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
        { name: "Labial Hypertrophy", link: "/treatments/labial-hypertrophy" },
      ],
    },
    {
      title: "Bladder Leaks and Incontinence",
      items: [
        { name: "Stress", link: "/treatments/bladder-leaks/stress" },
        { name: "Urge", link: "/treatments/bladder-leaks/urge" },
        { name: "Mixed", link: "/treatments/bladder-leaks/mixed" },
        { name: "Nocturia", link: "/treatments/bladder-leaks/nocturia" },
      ],
    },
    {
      title: "Perimenopause and Menopause",
      items: [
        { name: "Vaginal Dryness", link: "/treatments/vaginal-dryness" },
        { name: "Bladder Leaks", link: "/treatments/bladder-leaks" },
        { name: "Skin Tightening", link: "/treatments/skin-tightening" },
        { name: "Body Contouring", link: "/treatments/body-contouring" },
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
        { name: "Skin Issues", link: "/treatments/skin-issues" },
        { name: "Cellulite", link: "/treatments/cellulite" },
        { name: "Acne and Acne Scars", link: "/treatments/acne" },
      ],
    },
  ];
  const services: Service[] = [
    {title: "After Childbirth / Non-Invasive Mommy Makeover",
      desc: "Motherhood changes your body in powerful ways. You may notice loosened skin, stretch marks, vaginal laxity, or weakened abdominal muscles.",
      color: "from-blue-50 to-blue-100",
      icon: s1,
      link: "/after-childbirth-&-non-invasive-mommy-makeover",
    },
    {
      title: "Bladder Leaks and Incontinence",
      desc: "You shouldn’t have to cross your legs when you laugh. Bladder leaks and incontinence can follow childbirth, hormonal shifts.",
      color: "from-purple-50 to-purple-100",
      icon: s2,
      link: "/bladder-leaks-and-incontinence",
    },
    {
      title: "Perimenopause and Menopause",
      desc: "Perimenopause and menopause are natural transitions — but that doesn’t mean you have to suffer through them. ",
      color: "from-teal-50 to-teal-100",
      icon: s3,
      link: "/perimenopause-and-menopause",
    },
    {
      title: "Breast Cancer Survivors",
      desc: "Healing after breast cancer takes time — physically and emotionally. We honor your journey by offering gentle care designed specifically for breast cancer survivors. ",
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
      link: "/skin-issues",
    },
    {
      title: "Fine Lines and Wrinkles",
      desc: "Fine lines tell stories — but you decide how many to keep. Our advanced rejuvenation options smooth fine lines and wrinkles naturally.",
      color: "from-pink-50 to-pink-100",
      icon: s7,
      link: "/treatments/vaginal-dryness",
    },
    {
      title: "Sunspots and Pigmentation",
      desc: "Sun-damaged or uneven skin can make you feel older than you are.",
      color: "from-indigo-50 to-indigo-100",
      icon: s8,
      link: "/treatments/gsm-&-genitourinary-syndrome-of-menopause",
    },
    {
      title: "Skin Tightening",
      desc: "If you’ve noticed sagging or loss of elasticity, skin tightening treatments can help you reclaim firmness and lift — without invasive surgery. ",
      color: "from-purple-50 to-purple-100",
      icon: s9, 
      link: "/treatments/abnormal-pap",
    },
    {
      title: "Cellulite",
      desc: "You’re not alone — cellulite affects nearly every woman, regardless of body type. ",
      color: "from-purple-50 to-purple-100",
      icon: s10,
      link: "/treatments/abnormal-bleeding",
    },
    {
      title: "Scars and Stretch Marks",
      desc: "Chronic acne and acne scars can be frustrating at any age. Dr Sugihara’s personalized approach focuses on healing inflammation, balancing hormones, and improving skin texture. ",
      color: "from-teal-50 to-teal-100",
      icon: s11,
      link: "/treatments/pain-with-sex",
    },
  ];

  onMount(() => {
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    gsap.from(".hero-text", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".hero-image", {
      opacity: 0,
      x: 60,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out",
    });
  });
</script>

<!-- HERO -->
<section class="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
  <div class="hero-text flex-1 z-10 space-y-6">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
      Empowering <span class="text-[#4A0C59]">Women's Health</span> Advanced Care, Delivered with Compassion
    </h1>
    <p class="text-lg text-gray-600 max-w-md">
      You deserve a healthcare partner who listens. We empower women through every stage of their sexual and reproductive journey, combining truly compassionate in-person care with the most effective, modern medical technology.
    </p>
    <div class="flex gap-4">
      <button class="bg-[#4A0C59] hover:bg-[#3A0A49] text-white px-6 py-3 rounded-full shadow-md transition">
        Book an Appointment
      </button>
      <button class="border border-[#4A0C59] text-[#4A0C59] hover:bg-[#4A0C59] hover:text-white px-6 py-3 rounded-full transition">
        Explore Services
      </button>
    </div>
  </div>

  <div class="hero-image flex-1 mt-12 md:mt-0 flex justify-center relative">
    <img src={hero} alt="Healthcare illustration" class="w-80 md:w-[60rem]" />
    <div class="absolute -z-10 bg-purple-200 w-80 h-80 rounded-full blur-3xl opacity-40 -right-10 top-10"></div>
  </div>
</section>

<!-- APPROACH -->
<section class="fade-in py-24 px-8 md:px-20 bg-[#F1F0FF] relative overflow-hidden">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1">
      <img src={hero2} alt="approach illustration" class="w-80 md:w-[60rem]" />
    </div>
    <div class="flex-1 space-y-6">
      <h2 class="text-4xl font-bold text-gray-800">Restore Confidence. Reclaim Comfort. Redefine You—From the Inside Out.</h2>
      <p class="text-lg text-gray-600">
        At Dr Corinne Sugihara’s Women’s Health, we understand that your body tells a story—of childbirth, healing, transition, and resilience. Whether you’re navigating changes after childbirth, facing perimenopause or menopause, or simply seeking relief from bladder leaks, skin issues, or recurrent UTIs, we’re here to help you feel like yourself again—whole, confident, and comfortable.
      </p>
      <p class="text-lg text-gray-600">
        Every treatment begins with one essential thing: a conversation. We listen, without judgment, so you can finally feel seen and understood. Then, we create a personalized plan designed not just to treat symptoms, but to restore your quality of life—with compassion, technology, and expertise.
      </p>
    </div>
  </div>
</section>

<section class="py-20 px-6 md:px-20 bg-white">
  <div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
    {#each categories as cat (cat.title)}
      <div class="fade-up bg-gradient-to-b from-purple-50 to-white rounded-3xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-purple-100">
        <h2 class="text-lg font-semibold text-[#4A0C59] border-b-2 border-purple-200 pb-2 mb-4">
          {cat.title}
        </h2>
        <ul class="space-y-2">
          {#each cat.items as item}
            <li>
              <a
                href={item.link}
                class="text-gray-700 hover:text-[#4A0C59] transition-colors text-sm block"
              >
                {item.name}
              </a>
            </li>
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
      <div class="bg-gradient-to-br {s.color} rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
        <div class="flex flex-col items-center text-center space-y-4">
          <img src={s.icon} alt={s.title} class=" opacity-90" />
          <h3 class="text-xl font-semibold text-gray-800">{s.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

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
