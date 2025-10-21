<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Draggable } from "gsap/Draggable"; // optional; safe if installed
  gsap.registerPlugin(ScrollTrigger, Draggable);
  import hero from "$lib/assets/about/hero.png"
  import hero2 from "$lib/assets/about/hero2.jpg"

  // Reusable typed refs
  let pageEl: HTMLElement;
  let heroEl: HTMLElement;
  let profileEl: HTMLElement;
  let profilePhotoWrap: HTMLElement;
  let bioPanel: HTMLElement;
  let teamEl: HTMLElement;
  let insuranceEl: HTMLElement;
  let logoRow: HTMLElement;

  // Team list (kept as text list — no grid cards)
  const teamMembers = [
    "Richelle Escobar, MA",
    "Martha Celis, MA",
    "Jean Patinella, MA",
    "Phyllis Elliot, MA",
  ];

  // Insurance logos (replace with real logos in /static/logos/)
  const insurers = [
    "/logos/insurer-1.png",
    "/logos/insurer-2.png",
    "/logos/insurer-3.png",
    "/logos/insurer-4.png",
    "/logos/insurer-5.png",
    "/logos/insurer-6.png",
  ];

  onMount(() => {
    // Page-level subtle fade
    gsap.from(pageEl, { autoAlpha: 0, duration: 0.6 });

    // HERO: headline + CTA reveal with stagger
    gsap.from(heroEl.querySelectorAll(".hero-stagger"), {
      y: 28,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    // Decorative shapes floating
    gsap.to(heroEl.querySelectorAll(".float"), {
      y: -12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
      stagger: 0.6,
    });

    // PROFILE: photo frame scale + bio text reveal with clip-path
    const tlProfile = gsap.timeline({
      scrollTrigger: {
        trigger: profileEl,
        start: "top 85%",
      },
    });

    tlProfile
      .from(profilePhotoWrap, {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
      })
      .from(
        profilePhotoWrap.querySelectorAll(".photo-deco"),
        { rotation: 10, autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.08 },
        "-=0.4"
      )
      .from(
        bioPanel.querySelectorAll(".bio-line"),
        {
          y: 22,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // Bio quote card pop
    gsap.from(bioPanel.querySelector(".quote-card"), {
      scale: 0.98,
      autoAlpha: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: bioPanel,
        start: "top 85%",
      },
    });

    // Team list reveal
    gsap.from(teamEl.querySelectorAll("li"), {
      y: 18,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.12,
      scrollTrigger: {
        trigger: teamEl,
        start: "top 90%",
      },
    });

    // Insurance panel entrance + logo marquee
    gsap.from(insuranceEl.querySelectorAll(".ins-anim"), {
      y: 22,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: insuranceEl,
        start: "top 90%",
      },
    });

    // Logo row horizontal infinite marquee effect
    // Duplicate logos for seamless loop (we animate x)
    const logoEls = logoRow.querySelectorAll(".logo-item");
    if (logoEls.length) {
      const totalWidth = (logoEls.length) * 160; // estimate per logo block
      gsap.fromTo(
        logoRow,
        { x: 0 },
        {
          x: -totalWidth,
          duration: Math.max(18, logoEls.length * 3),
          repeat: -1,
          ease: "linear",
        }
      );
    }

    // micro-interactions for 'Book' button in hero
    const bookBtn = heroEl.querySelector(".cta-book");
    gsap.to(bookBtn, {
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      duration: 3.2,
      ease: "sine.inOut",
    });

    // Accessibility: kill animations for reduced-motion users
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.globalTimeline.clear();
    }
  });
</script>

<!-- Page wrapper -->
<div bind:this={pageEl} class="font-sans text-gray-900">

  <!-- HERO / Lead -->
  <section bind:this={heroEl} class="relative overflow-hidden bg-white">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <!-- Left: Headline (emphasized) -->
      <div class="lg:col-span-6 order-2 lg:order-1">
        <h1 class="hero-stagger text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-indigo-900 max-w-2xl">
          A caring approach to your sexual and reproductive health
        </h1>

        <p class="hero-stagger mt-6 text-gray-600 max-w-xl">
          We help women take control of their bodies and lives with empathetic, thoughtful healthcare — listening carefully and building an informed plan that gets you back to feeling great.
        </p>

        <div class="hero-stagger mt-8 flex gap-4 items-center">
          <button class="cta-book inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-3 rounded-full transition shadow">
            Book an appointment
          </button>
          <a href="#profile" class="text-indigo-700 hover:underline">Meet the doctor</a>
        </div>
      </div>

      <!-- Right: big art illustration -->
      <div class="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
        <div class="relative w-full max-w-lg">
          <div class="float absolute -left-8 top-6 w-16 h-16 rounded-lg bg-teal-200/80 transform rotate-12"></div>
          <div class="float absolute -right-12 bottom-8 w-32 h-32 rounded-full bg-pink-300/70"></div>

          <!-- framed illustration (rounded card) -->
          <div class="rounded-2xl overflow-hidden bg-purple-50 p-6 md:p-8 shadow-2xl">
            <img src={hero} alt="decorative figure" class="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Short statement band -->
  <section class="bg-teal-50">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-8">
      <p class="text-indigo-800 font-medium text-lg leading-relaxed max-w-4xl">
        You know when something doesn't feel quite right. So we make it a point to ask you questions and carefully listen to what you have to say. This way, we can develop an informed plan that actually addresses your needs and gets you back to feeling great.
      </p>
    </div>
  </section>

  <!-- PROFILE (rearranged: photo left, bio right; framed photo + animated text reveal) -->
  <section id="profile" bind:this={profileEl} class="container mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 xl:gap-20 gap-24 items-start">
      <!-- Photo in gradient frame -->
      <div class="lg:col-span-4 flex justify-center lg:justify-start">
        <div class="relative rounded-3xl p-1 bg-gradient-to-br from-indigo-600 to-sky-400 shadow-xl" bind:this={profilePhotoWrap}>
          <div class="bg-white rounded-2xl overflow-hidden p-4 md:p-6 w-[320px] md:w-[360px]">
            <img src={hero2} alt="Dr. Corinne Sugihara" class="w-full h-auto object-cover rounded-xl" />
          </div>

          <!-- Decorative star/shape elements layered -->
          <div class="photo-deco absolute -left-6 -bottom-6 w-16 h-16 bg-pink-400/90 rounded-full rotate-12"></div>
          <div class="photo-deco absolute -right-8 top-2 w-10 h-10 bg-emerald-300/90 rounded-lg rotate-6"></div>
        </div>
      </div>

      <!-- Bio content -->
      <div class="lg:col-span-6 xl:col-span-8" bind:this={bioPanel}>
        <h2 class="text-2xl md:text-3xl font-serif text-indigo-900 bio-line">Meet Dr. Corinne Sugihara</h2>

        <!-- Quote card with soft background -->
        <div class="quote-card bio-line mt-4 p-6 bg-white rounded-xl shadow-md border-l-2 border-indigo-200 max-w-2xl">
          <p class="text-gray-700">
            “After years of working as an OB/GYN and delivering thousands of babies, I shifted my focus to General Gynecology. In my practice, we listen first — make sure we hear what you have to say and work with you to develop a treatment plan that fits with your life-style and addresses your needs.”
          </p>
          <p class="mt-3 text-sm text-gray-500">— Dr. Corinne Sugihara</p>
        </div>

        <!-- long bio text with multiple reveal lines -->
        <div class="mt-6 space-y-4">
          <p class="bio-line text-gray-700">
            A California native, Dr. Sugihara completed her undergraduate studies in Neurobiology at UC Berkeley. She then went on to Medical School at George Washington University on a US Navy scholarship. During her internship at Penn State University’s Hershey Medical Center and her residency at SUNY Stonybrook’s Long Island Jewish Medical Center, in New York, she specialized in OB/GYN.
          </p>

          <p class="bio-line text-gray-700">
            After completing her training, Dr. Sugihara was called to active duty in the US Navy. During her four years of active duty, she was made Director of Surgical Services at the base hospital and achieved the rank of Lieutenant Commander. After fulfilling her service obligation, she moved to private practice in California and later launched her own practice.
          </p>

          <p class="bio-line text-gray-700">
            With more than 35 years of experience as an OB/GYN, Dr. Sugihara understands the complexities of womanhood and has the tools and care to assist you with your concerns.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEAM (text list, modern layout with small profile badges) -->
  <section class="bg-white border-t border-gray-100">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-xl font-serif text-indigo-800 mb-4">Our Team</h3>
        <p class="text-gray-600 mb-6">Dr. Sugihara is assisted in her Gynecology practice by:</p>

        <ul class="space-y-3 text-gray-700" bind:this={teamEl}>
          {#each teamMembers as t}
            <li class="flex items-center gap-3">
              <span class="inline-block w-2 h-2 rounded-full bg-indigo-600/80"></span>
              <span class="text-sm">{t}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <!-- CALL TO ACTION small -->
  <section class="py-10">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="bg-indigo-700/5 border border-indigo-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-lg font-semibold text-indigo-900">Prefer to speak with a clinician?</h4>
          <p class="text-gray-600 text-sm">Call us or book an appointment and we’ll triage quickly to get you the right care.</p>
        </div>
        <div class="flex gap-3">
          <a class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white shadow" href="tel:">
            Call clinic
          </a>
          <a class="inline-flex items-center px-4 py-2 rounded-full border border-indigo-200 text-indigo-700" href="#">
            Book online
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- INSURANCE (redesigned with logos and info panel) -->
  <section bind:this={insuranceEl} class="bg-teal-50">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <!-- Info panel -->
        <div class="lg:col-span-2">
          <h3 class="text-2xl font-serif text-indigo-900 ins-anim">Insurance</h3>
          <p class="ins-anim mt-3 text-gray-700 max-w-3xl">
            We accept most PPO insurance plans, including large national and regional carriers. Out of network? We also accept cash payments and will provide documentation to submit claims if needed.
          </p>

          <div class="ins-anim mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="font-semibold text-indigo-800">Most PPO plans</div>
              <div class="text-sm text-gray-600 mt-2">Anthem Blue Cross • Blue Shield of California • Aetna • Cigna • UnitedHealthcare • Humana</div>
            </div>

            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="font-semibold text-indigo-800">HMO partners</div>
              <div class="text-sm text-gray-600 mt-2">Providence • (others listed on request)</div>
            </div>
          </div>

          <p class="ins-anim mt-4 text-sm text-gray-600">
            If you are unsure about coverage, call our office — we’re happy to check benefits before your visit.
          </p>
        </div>

        <!-- Logo marquee / visual -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="text-sm font-medium text-indigo-800 mb-4 ins-anim">We accept (select carriers)</div>
            <div class="overflow-hidden rounded-lg">
              <div class="flex gap-6 whitespace-nowrap will-change-transform" bind:this={logoRow}>
                {#each insurers as src, i}
                  <div class="logo-item inline-flex items-center justify-center min-w-[140px] h-20 bg-white p-3 rounded-md shadow-sm">
                    <img src={src} alt={"Insurer " + (i + 1)} class="max-h-10 object-contain" />
                  </div>
                {/each}

                <!-- Duplicate for continuous loop -->
                {#each insurers as src, i}
                  <div class="logo-item inline-flex items-center justify-center min-w-[140px] h-20 bg-white p-3 rounded-md shadow-sm">
                    <img src={src} alt={"Insurer dup " + (i + 1)} class="max-h-10 object-contain" />
                  </div>
                {/each}
              </div>
            </div>

            <div class="mt-4 text-xs text-gray-500 ins-anim">
              Out of network? We accept cash payments and will provide statements for reimbursement.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<style>
  /* small helpers */
  :global(.container) {
    max-width: 1200px;
  }

  /* make sure marquee doesn't wrap on small screens */
  .logo-item img {
    pointer-events: none;
  }
</style>
