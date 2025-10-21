<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { tick } from 'svelte';

  let menuOpen = false;
  let desktopTreatmentsOpen = false; // New state for desktop treatments dropdown
  let mobileTreatmentsOpen = false; // New state for mobile treatments dropdown

  // Close dropdowns when clicking outside
  let headerEl: HTMLElement;

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Newly Published Book', href: '/book' },
    { name: 'Blog / Studies Page', href: '/blog' }
  ];

  onMount(() => {
    const handleClick = (e: MouseEvent) => {
      if (!headerEl.contains(e.target as Node)) {
        desktopTreatmentsOpen = false; // Close desktop dropdown
        mobileTreatmentsOpen = false; // Close mobile dropdown
        menuOpen = false;
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
</script>

<!-- Top Bar -->
<div class="bg-[#DD47A0] text-white text-sm flex flex-col md:flex-row md:items-center justify-around px-4 py-2 text-center md:text-left">
  <span class="mb-1 md:mb-0">⚠️ Please call our office to schedule your appointment.</span>
  <div class="flex flex-wrap justify-center md:justify-end text-sm text-white gap-4">
    <span class="flex items-center gap-1">📞 +1 949-644-7433</span>
    <span class="flex items-center gap-1">📍 1401 Avocado Avenue, Suite 602</span>
    <span class="flex items-center gap-1">🕒 Mon – Fri 8:30am–4:30pm</span>
  </div>
</div>

<!-- Header -->
<header bind:this={headerEl} class="bg-white shadow-sm px-4 md:px-20 py-4 font-[Poppins]  sticky top-0 z-50">
  <div class="flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-2">
      <img src={logo} alt="logo" class="h-16 w-auto" />
    </a>

    <!-- Hamburger Button (Mobile) -->
    <button
      class="lg:hidden text-3xl text-gray-700 focus:outline-none"
      on:click={() =>{ (menuOpen = !menuOpen)}}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>

    <!-- Navigation (Desktop) -->
    <nav class="hidden lg:flex items-center gap-6 text-gray-800 font-medium">
      {#each navItems as item}
        {#if item.dropdown}
          <div class="relative">
            <button
              on:click={() => (desktopTreatmentsOpen = !desktopTreatmentsOpen)}
              class="hover:text-purple-700 flex items-center gap-1"
              aria-expanded={desktopTreatmentsOpen}
              aria-controls="treatments-dropdown"
            >
              {item.name}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if desktopTreatmentsOpen} <!-- Use desktopTreatmentsOpen -->
              <div id="treatments-dropdown" class="absolute bg-white border mt-2 shadow-md rounded-md w-48 text-sm z-50">
                {#each item.dropdownItems as dropdownItem}
                  <a href={dropdownItem.href} class="block px-4 py-2 hover:bg-gray-100">{dropdownItem.name}</a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a href={item.href} class:active={$page.url.pathname === item.href} aria-current={$page.url.pathname === item.href ? 'page' : undefined}>{item.name}</a>
        {/if}
      {/each}

      <a
        href="/appointment"
        class="bg-[#6463D8] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-1 transition-all"
      >
        Book an Appointment →
      </a>
    </nav>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <nav
      class="lg:hidden absolute top-[100%] left-0 w-full flex flex-col space-y-3 bg-white border-t pt-4 text-gray-800 font-medium animate-fadeIn shadow-md"
    >
      {#each navItems as item}
        {#if item.dropdown}
          <div class="px-4">
            <button
              on:click={() => (mobileTreatmentsOpen = !mobileTreatmentsOpen)}
              class="w-full text-left flex items-center justify-between hover:text-purple-700"
              aria-expanded={mobileTreatmentsOpen}
              aria-controls="mobile-treatments-dropdown"
            >
              <span>{item.name}</span>
              <svg
                class="w-4 h-4 transform transition-transform"
                class:rotate-180={mobileTreatmentsOpen}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if mobileTreatmentsOpen} <!-- Use mobileTreatmentsOpen -->
              <div id="mobile-treatments-dropdown" class="mt-2 ml-4 text-sm">
                {#each item.dropdownItems as dropdownItem}
                  <a href={dropdownItem.href} class="block py-1 hover:text-purple-700">{dropdownItem.name}</a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a href={item.href} class="px-4" class:active={$page.url.pathname === item.href} aria-current={$page.url.pathname === item.href ? 'page' : undefined}>{item.name}</a>
        {/if}
      {/each}

      <a
        href="/appointment"
        class="bg-[#6463D8] hover:bg-indigo-700 text-white px-4 py-2 mx-4 rounded-lg shadow-md flex items-center justify-center"
      >
        Book an Appointment →
      </a>
    </nav>
  {/if}
</header>

<style>
  a.active {
    color: #6b21a8; /* purple-800 */
    font-weight: 600;
    border-bottom: 2px solid #6b21a8;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
</style>
