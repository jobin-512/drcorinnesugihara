<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let menuOpen = false;
  let desktopTreatmentsOpen = false;
  let mobileTreatmentsOpen = false;
  let hoverTimeout: any;
  let headerEl: HTMLElement;

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Newly Published Book', href: '/book' },
    { name: 'Blog / Studies Page', href: '/blog' }
  ];

  const openMenu = () => {
    clearTimeout(hoverTimeout);
    desktopTreatmentsOpen = true;
  };

  const closeMenu = () => {
    hoverTimeout = setTimeout(() => {
      desktopTreatmentsOpen = false;
    }, 300); // 300ms delay before closing
  };

  onMount(() => {
    const handleClick = (e: MouseEvent) => {
      if (!headerEl.contains(e.target as Node)) {
        desktopTreatmentsOpen = false;
        mobileTreatmentsOpen = false;
        menuOpen = false;
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
</script>

<!-- TOP BAR -->
<div class="bg-[#DD47A0] text-white text-sm flex flex-col md:flex-row md:items-center justify-around px-4 py-2 text-center md:text-left">
  <span class="mb-1 md:mb-0">⚠️ Please call our office to schedule your appointment.</span>
  <div class="flex flex-wrap justify-center md:justify-end text-sm text-white gap-4">
    <span class="flex items-center gap-1">📞 +1 949-644-7433</span>
    <span class="flex items-center gap-1">📍 1401 Avocado Avenue, Suite 602</span>
    <span class="flex items-center gap-1">🕒 Mon – Fri 8:30am–4:30pm</span>
  </div>
</div>

<!-- HEADER -->
<header bind:this={headerEl} class="bg-white shadow-sm px-4 md:px-20 py-4 font-[Poppins] sticky top-0 z-50">
  <div class="flex justify-between items-center">
    <!-- LOGO -->
    <a href="/" class="flex items-center space-x-2">
      <img src={logo} alt="logo" class="h-16 w-auto" />
    </a>

    <!-- HAMBURGER BUTTON (MOBILE) -->
    <button
      class="lg:hidden text-3xl text-gray-700 focus:outline-none"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>

    <!-- NAVIGATION (DESKTOP) -->
    <nav class="hidden lg:flex items-center gap-6 text-gray-800 font-medium relative">
      {#each navItems as item}
        {#if item.name === 'Treatments'}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="relative"
            on:mouseenter={openMenu}
            on:mouseleave={closeMenu}
          >
            <a href={item.href} class="hover:text-[#6B21A8] flex items-center gap-1 transition-all">
              Treatments
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {#if desktopTreatmentsOpen}
              <div
                class="fixed left-1/2 transform -translate-x-1/2 top-[120px] w-[90vw] bg-white shadow-2xl border border-gray-200 rounded-2xl p-8 grid grid-cols-5 gap-8 z-50 opacity-0 translate-y-4 animate-fadeSlideIn"
                on:mouseenter={openMenu}
                on:mouseleave={closeMenu}
              >
                <!-- COLUMN 1 -->
                <div>
                  <a href="/after-childbirth-non-Invasive-mommy-makeover" class="font-semibold text-[#6B21A8] mb-3 border-b pb-1 text-sm">After Childbirth / Non-Invasive Mommy Makeover</a>
                  <ul class="space-y-1 text-sm">
                    <li><a href="/treatments/diastasis-recti" class="hover:text-purple-700">Diastasis Recti</a></li>
                    <li><a href="/treatments/skin-tightening" class="hover:text-purple-700">Skin Tightening</a></li>
                    <li><a href="/treatments/body-contouring" class="hover:text-purple-700">Body Contouring</a></li>
                    <li><a href="/treatments/bladder-leaks" class="hover:text-purple-700">Bladder Leaks</a></li>
                    <li><a href="/treatments/vaginal-laxity" class="hover:text-purple-700">Vaginal Laxity</a></li>
                    <li><a href="/treatments/vaginal-dryness" class="hover:text-purple-700">Vaginal Dryness</a></li>
                    <li><a href="/treatments/labial-hypertrophy" class="hover:text-purple-700">Labial Hypertrophy</a></li>
                  </ul>
                </div>

                <!-- COLUMN 2 -->
                <div>
                  <a href="/bladder-leaks-&-incontinence" class="font-semibold text-[#6B21A8] mb-3 border-b pb-1 text-sm">Bladder Leaks and Incontinence</a>
                  <ul class="space-y-1 text-sm">
                    <li><a href="/treatments/stress-incontinence" class="hover:text-purple-700">Stress</a></li>
                    <li><a href="/treatments/urge-incontinence" class="hover:text-purple-700">Urge</a></li>
                    <li><a href="/treatments/mixed-incontinence" class="hover:text-purple-700">Mixed</a></li>
                    <li><a href="/treatments/nocturia" class="hover:text-purple-700">Nocturia</a></li>
                  </ul>
                </div>

                <!-- COLUMN 3 -->
                <div>
                  <a href="/perimenopause-and-menopause" class="font-semibold text-[#6B21A8] mb-3 border-b pb-1 text-sm">Perimenopause and Menopause</a>
                  <ul class="space-y-1 text-sm">
                    <li><a href="/treatments/vaginal-dryness" class="hover:text-purple-700">Vaginal Dryness</a></li>
                    <li><a href="/treatments/bladder-leaks" class="hover:text-purple-700">Bladder Leaks</a></li>
                    <li><a href="/treatments/skin-tightening" class="hover:text-purple-700">Skin Tightening</a></li>
                    <li><a href="/treatments/body-contouring" class="hover:text-purple-700">Body Contouring</a></li>
                  </ul>
                </div>

                <!-- COLUMN 4 -->
                <div>
                  <a href="/breast-cancer-survivors" class="font-semibold text-[#6B21A8] mb-3 border-b pb-1 text-sm">Breast Cancer Survivors</a>
                  <ul class="space-y-1 text-sm">
                    <li><a href="/treatments/vaginal-dryness" class="hover:text-purple-700">Vaginal Dryness</a></li>
                    <li><a href="/treatments/recurrent-utis" class="hover:text-purple-700">Recurrent UTIs</a></li>
                  </ul>
                </div>

                <!-- COLUMN 5 -->
                <div>
                  <h3 class="font-semibold text-[#6B21A8] mb-3 border-b pb-1 text-sm">Other Treatments</h3>
                  <ul class="space-y-1 text-sm">
                    <li><a href="/treatments/recurrent-utis" class="hover:text-purple-700">Recurrent UTIs</a></li>
                    <li><a href="/treatments/skin-issues" class="hover:text-purple-700">Skin issues</a></li>
                    <li><a href="/treatments/cellulite" class="hover:text-purple-700">Cellulite</a></li>
                    <li><a href="/treatments/acne-scars" class="hover:text-purple-700">Acne and Acne Scars</a></li>
                  </ul>
                </div>
              </div>
            {/if}
          </div>
        {:else}
          <a href={item.href} class="hover:text-[#6B21A8] transition-all" class:active={$page.url.pathname === item.href}>
            {item.name}
          </a>
        {/if}
      {/each}

      <a href="/appointment" class="bg-[#6463D8] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-1 transition-all">
        Book an Appointment →
      </a>
    </nav>
  </div>

  <!-- MOBILE MENU -->
  {#if menuOpen}
    <nav class="lg:hidden absolute top-[100%] left-0 w-full flex flex-col space-y-3 bg-white border-t pt-4 text-gray-800 font-medium animate-fadeSlideIn shadow-md z-50">
      {#each navItems as item}
        {#if item.name === 'Treatments'}
          <div class="px-4">
            <button on:click={() => (mobileTreatmentsOpen = !mobileTreatmentsOpen)} class="w-full text-left flex items-center justify-between hover:text-purple-700">
              <span>Treatments</span>
              <svg class="w-4 h-4 transform transition-transform" class:rotate-180={mobileTreatmentsOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if mobileTreatmentsOpen}
              <div class="mt-2 ml-6 space-y-2 text-sm">
                <details>
                  <summary class="font-semibold text-[#6B21A8] cursor-pointer">After Childbirth</summary>
                  <ul class="ml-4 space-y-1">
                    <li><a href="/treatments/diastasis-recti">Diastasis Recti</a></li>
                    <li><a href="/treatments/skin-tightening">Skin Tightening</a></li>
                    <li><a href="/treatments/body-contouring">Body Contouring</a></li>
                  </ul>
                </details>
                <details>
                  <summary class="font-semibold text-[#6B21A8] cursor-pointer">Bladder Leaks</summary>
                  <ul class="ml-4 space-y-1">
                    <li><a href="/treatments/stress-incontinence">Stress</a></li>
                    <li><a href="/treatments/urge-incontinence">Urge</a></li>
                  </ul>
                </details>
                <details>
                  <summary class="font-semibold text-[#6B21A8] cursor-pointer">Menopause</summary>
                  <ul class="ml-4 space-y-1">
                    <li><a href="/treatments/vaginal-dryness">Vaginal Dryness</a></li>
                  </ul>
                </details>
                <details>
                  <summary class="font-semibold text-[#6B21A8] cursor-pointer">Other Treatments</summary>
                  <ul class="ml-4 space-y-1">
                    <li><a href="/treatments/recurrent-utis" >Recurrent UTIs</a></li>
                    <li><a href="/treatments/skin-issues" >Skin issues</a></li>
                    <li><a href="/treatments/cellulite">Cellulite</a></li>
                    <li><a href="/treatments/acne-scars">Acne and Acne Scars</a></li>
                  </ul>
                </details>
              </div>
            {/if}
          </div>
        {:else}
          <a href={item.href} class="px-4">{item.name}</a>
        {/if}
      {/each}

      <a href="/appointment" class="bg-[#6463D8] hover:bg-indigo-700 text-white px-4 py-2 mx-4 rounded-lg shadow-md flex items-center justify-center">
        Book an Appointment →
      </a>
    </nav>
  {/if}
</header>

<style>
  a.active {
    color: #6b21a8;
    font-weight: 600;
    border-bottom: 2px solid #6b21a8;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeSlideIn {
    animation: fadeSlideIn 0.4s ease forwards;
  }
</style>
