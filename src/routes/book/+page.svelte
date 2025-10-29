<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import b1 from "$lib/assets/book/1.jpg";
  import b2 from "$lib/assets/book/2.jpg";

  gsap.registerPlugin(ScrollTrigger);

  const amazonLink = "https://www.amazon.co.uk/dp/B0FRP9N696";

  onMount(() => {
    gsap.from(".book-hero", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".excerpt", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: { trigger: ".excerpt", start: "top 80%" },
      ease: "power2.out",
    });
  });
</script>

<section class="py-20 px-6 md:px-20 bg-white">
  <div class="max-w-5xl mx-auto text-center book-hero">
    <img src={b1} alt="Book Cover" class="mx-auto w-64 md:w-80 shadow-xl rounded-lg mb-8" />
    <h1 class="text-4xl md:text-5xl font-bold text-[#4A0C59] mb-4">Intimate Wellness: Reclaim Health, Confidence & Womanhood After Childbirth, Bladder Leaks, Menopause, or Breast Cancer</h1>
    <p class="text-lg text-gray-700 mb-6">By Dr Corinne Sugihara</p>
    <a href={amazonLink} target="_blank" rel="noopener" class="inline-block bg-[#4A0C59] hover:bg-[#3A0A49] text-white px-6 py-3 rounded-full shadow-lg transition">Buy on Amazon</a>
  </div>
</section>

<section class="py-16 px-6 md:px-20 bg-[#F9F9FB] excerpt">
  <div class="max-w-4xl mx-auto prose text-gray-700">
    <h2 class="text-2xl font-semibold mb-4 text-[#4A0C59]">Excerpt from the Book</h2>
    <p>Women suffer. From puberty through pregnancy, childbirth and postpartum recovery, through perimenopause, menopause and beyond, women suffer. Now, based on major advances in medical technology, simple, non-invasive treatments can make all that suffering a thing of the past.</p>
    <p>Intimate Wellness presents the personal accounts of women finding solutions to problems that made their lives difficult. Problems like abdominal wall separation after pregnancy, bladder leaks, and recurrent UTIs. These problems, and many more, can now be easily addressed by providing life-changing treatments that help women get back to normal, without drugs, hormones, or surgery.</p>
    <p>As Dr. Henry Ramirez shares, what we’re doing with these treatments is basically causing an organized trauma to have the body respond. And that response from the body is an inflammation cascade that brings in the fibroblasts.</p>
    <p>The fibroblast cells are basically pluripotent cells that are able to differentiate to produce collagen, elastin, blood cells, and nerve cells in the area. So the more of those that we can get into the area we treated, the more response we get.</p>
    <p>Think about that. The body is now producing more collagen, more elastin, more blood flow, and more innervation. So the patient’s ability to feel, the patient’s ability to heal, the patient’s ability to tighten up that tissue just returns better than it was before.</p>
    <p>That means, we now have treatments that stimulate a woman’s body to heal and rejuvenate itself in the most natural way possible. And by doing so, we help transform these women’s lives.</p>
    <p>Our goal with Intimate Wellness is to increase awareness of issues that affect women after childbirth, bladder leaks, menopause, and breast cancer. Then to demonstrate that with these new treatments, women no longer need to suffer in silence. Women can now reclaim their health, their confidence, and their womanhood with just a few easy treatments so they can get back to enjoying and doing all the things they love in life.</p>
  </div>
</section>

<section class="py-20 px-6 md:px-20 bg-white">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-[#4A0C59]">Inside the Book</h2>
    <div class="grid sm:grid-cols-2 gap-8">
      <img src={b1} alt="Inside Book Photo 1" class="w-full rounded-lg shadow-lg" />
      <img src={b2} alt="Inside Book Photo 2" class="w-full rounded-lg shadow-lg" />
    </div>
    <p class="mt-8 text-gray-700">Explore topics such as women’s health journeys, post-treatment care, healing, and empowerment. This book offers actionable insights, grounded in real-world experience and compassionate guidance.</p>
  </div>
</section>

<section class="py-16 px-6 md:px-20 bg-[#F9F9FB] text-center">
  <p class="text-gray-700 mb-4">Have questions? Want to learn more about the author & her approach? <a href="/about" class="text-[#4A0C59] underline">Visit Dr Corinne Sugihara’s bio</a>.</p>
  <a href={amazonLink} target="_blank" rel="noopener" class="inline-block bg-[#4A0C59] hover:bg-[#3A0A49] text-white px-6 py-3 rounded-full shadow-lg transition">Buy on Amazon</a>
</section>

<style>
  section { scroll-margin-top: 80px; }
</style>
