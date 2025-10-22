<script lang="ts">
  import "../app.css";
  import favicon from '$lib/assets/favicon.svg';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let { children } = $props();

  onMount(() => {
    const glow = document.querySelector(".cursor-glow") as HTMLElement;
	
    if (!glow) return;

    // --- Cursor follows mouse smoothly ---
    const xTo = gsap.quickTo(glow, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.4, ease: "power3.out" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    // --- Subtle pulsing motion for luxury feel ---
    gsap.to(glow, {
      scale: 1.1,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // --- Interactive hover reactions ---
    const interactiveEls = document.querySelectorAll("button, a, .hover-card, .cta-button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(glow, {
          scale: 2,
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.out",
          background:
            "radial-gradient(circle at center, rgba(147,197,253,0.4), rgba(59,130,246,0))",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(glow, {
          scale: 1,
          opacity: 0.6,
          duration: 0.4,
          ease: "power2.inOut",
          background:
            "radial-gradient(circle at center, rgba(167,139,250,0.3), rgba(59,130,246,0))",
        });
      });
    });

	
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />

<!-- ✨ The glowing cursor element -->
<div class="cursor-glow"></div>

<style>
  .cursor-glow {
    position: fixed;
    top: 0;
    left: 0;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    opacity: 0.6;
    background: radial-gradient(circle at center, rgba(167,139,250,0.3), rgba(59,130,246,0));
    filter: blur(40px);
    transform: translate(-50%, -50%);
  }
</style>
