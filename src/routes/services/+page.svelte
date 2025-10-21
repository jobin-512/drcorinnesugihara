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
  }

  const services: Service[] = [
    {title: "UTI Care",
      desc: "If you've received an abnormal pap result, we're here to help you understand what it means.",
      color: "from-blue-50 to-blue-100",
      icon: s1,
    },
    {
      title: "Pap Tests",
      desc: "Early screening for cervical health with comfort and privacy.",
      color: "from-purple-50 to-purple-100",
      icon: s2,
    },
    {
      title: "Vaginal Infections",
      desc: "Personalized diagnosis and care for recurring or new symptoms.",
      color: "from-teal-50 to-teal-100",
      icon: s3,
    },
    {
      title: "Contraception Consultation",
      desc: "Expert advice on choosing the method that fits your lifestyle.",
      color: "from-rose-50 to-rose-100",
      icon: s4,
    },
    {
      title: "Menopause & Perimenopause",
      desc: "Navigate transitions with compassionate, personalized hormone care.",
      color: "from-orange-50 to-orange-100",
      icon: s5,
    },
    {
      title: "Bladder Control & Incontinence",
      desc: "Discrete treatments designed to restore confidence and comfort.",
      color: "from-emerald-50 to-emerald-100",
      icon: s6,
    },
    {
      title: "Vaginal Dryness",
      desc: "Comfort-restoring care to enhance your confidence and intimacy.",
      color: "from-pink-50 to-pink-100",
      icon: s7,
    },
    {
      title: "GSM – Genitourinary Syndrome of Menopause",
      desc: "GSM can cause discomfort and urinary problems in postmenopausal women. We provide personalized treatment plans to alleviate symptoms and improve your quality of life. ",
      color: "from-indigo-50 to-indigo-100",
      icon: s8,
    },
    {
      title: "Abnormal Pap ",
      desc: "If you've received an abnormal pap result, we're here to help you understand what it means.",
      color: "from-purple-50 to-purple-100",
      icon: s9,
    },
    {
      title: "Abnormal bleeding",
      desc: "Whether it's unusually heavy periods, spotting between cycles, or large clots, we will work with you to diagnose the cause and develop a treatment plan tailored to your needs.",
      color: "from-purple-50 to-purple-100",
      icon: s10,
    },
    {
      title: "Pain with sex",
      desc: "Pain with sex could be due to stress, trauma, hormonal shifts, STIs, or other chronic conditions. We'll work with you to identify the cause and devise a treatment plan tailored to your needs.",
      color: "from-teal-50 to-teal-100",
      icon: s11,
    },
    {
      title: "Irregular cycles",
      desc: "Every woman's cycle is unique. But when irregularities like PMS, PCOS, heavy or absent periods become a part of your monthly routine, we can help.",
      color: "from-rose-50 to-rose-100",
      icon: s12,
    },
    {
      title: "Breast health",
      desc: "Experiencing symptoms like breast pain, nipple discharge, or discovering a lump can be unsettling. We are here to support and guide you in identifying the cause and the treatment.",
      color: "from-orange-50 to-orange-100",
      icon: s13,
    },
    {
      title: "Labial Hypertrophy",
      desc: "If you're avoiding tight pants or intimate encounters due to enlargement of your labia, we understand and offer solutions that can restore your well-being without surgery.",
      color: "from-emerald-50 to-emerald-100",
      icon: s14,
    },
    {
      title: "Pregnancy confirmation and counselling",
      desc: "Unsure if you're expecting? Our comprehensive pregnancy consultation can help you confirm your status and navigate the journey ahead.",
      color: "from-pink-50 to-pink-100",
      icon: s15,
    },
    {
      title: "Fibroids",
      desc: "Living with fibroids can be challenging, but with the right care, it doesn't have to be. With our comprehensive approach, we're here to provide you with the support and care you need.",
      color: "from-indigo-50 to-indigo-100",
      icon: s16,
    },
    {
      title: "Your Fertility, Our Support.",
      desc: "If you're considering pregnancy now, in the future, or just want to be informed, we're here for you.",
      color: "from-blue-50 to-blue-100",
      icon: s17,
    },
    {
      title: "Worried about STIs?",
      desc: "We're here to help. Whether you're seeking reassurance or suspect exposure, we offer swift, confidential testing services.",
      color: "from-purple-50 to-purple-100",
      icon: s18,
    },
    {
      title: "Genital sores",
      desc: "Genital sores can be distressing. We understand the sensitivity of this issue and are committed to providing you with the highest quality of care without judgment.",
      color: "from-teal-50 to-teal-100",
      icon: s19,
    },
    {
      title: "Vaginal Laxity",
      desc: "Childbirth and hormonal changes can lead to vaginal laxity and discomfort. We understand and offer a number of treatments to address this issue and restore your comfort and confidence.",
      color: "from-rose-50 to-rose-100",
      icon: s20,
    },
    {
      title: "Diastasis Recti",
      desc: "Are the muscles in your abdomen still separated after delivering your baby? We can help. We have treatment options that can close the gap and restore your core strength.",
      color: "from-orange-50 to-orange-100",
      icon: s21,
    },
    {
      title: "Lichen Sclerosus",
      desc: "Lichen Sclerosus can be very uncomfortable, with intense itching and scarring of the labia. We're here to provide you compassionate care and treatments you need to find lasting relief.",
      color: "from-emerald-50 to-emerald-100",
      icon: s22,
    },
    {
      title: "PCOS",
      desc: "PCOS can be a daunting diagnosis. We know the struggle and are here to support you.",
      color: "from-pink-50 to-pink-100",
      icon: s23,
    },
    {
      title: "Endometriosis",
      desc: "Endometriosis is challenging to diagnose and manage. But you don't have to face it alone. We are committed to providing a comprehensive treatment plan tailored to meet your needs.",
      color: "from-indigo-50 to-indigo-100",
      icon: s24,
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
      Empowering <span class="text-[#4A0C59]">Women's Health</span> Through Care & Technology
    </h1>
    <p class="text-lg text-gray-600 max-w-md">
      Compassionate in-person healthcare for every stage of your sexual and reproductive journey.
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
      <h2 class="text-4xl font-bold text-gray-800">Our Approach</h2>
      <p class="text-lg text-gray-600">
        We blend technology with compassionate care. Each session begins with a conversation — a safe space to discuss your concerns before any physical exam.
      </p>
      <p class="text-lg text-gray-600">
        We explain every step and create a personalized care plan that’s as unique as you are.
      </p>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="fade-in px-8 md:px-20 py-28 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-gray-800">Comprehensive Care</h2>
    <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
      Explore our full range of in-person women’s health services designed with empathy and expertise.
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
