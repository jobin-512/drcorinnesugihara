<script lang="ts">
    import hero from "$lib/assets/home/hero.webp"
    import s1 from "$lib/assets/home/s1.png"
    import s2 from "$lib/assets/home/s2.png"
    import s3 from "$lib/assets/home/s3.png"
    import s4 from "$lib/assets/home/s4.png"

</script>

<section class="relative  overflow-hidden bg-[#FFE9F6]">
  <div class="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
    <!-- Left Content -->
    <div class=" text-center lg:text-left mb-12 lg:mb-0 text-[#4A0C59]">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#4A0C59] leading-tight mb-6">
        We help you look and feel your very best, <br class="hidden md:inline" />without surgery!
      </h1>
      <p class=" text-lg mb-8  mx-auto lg:mx-0">
        At Casa Esthetica, we are dedicated to assisting you through all stages of your life, because we understand the impact your health can have on your day to day activities as well as your confidence.
      </p>
      <p class=" text-lg mb-8  mx-auto lg:mx-0">
        Our advanced aesthetic and wellness treatments, including EvolveX, FormaV, VTone, and Morpheus8, combined with our understanding and care will leave you with a wonderful experience and real results for your concerns.
      </p>
      <p class=" text-lg mb-10  mx-auto lg:mx-0">
        From skin concerns to sexual wellness, <strong class="text-purple-800">Dr. Corinne Sugihara</strong> and her team have the experience to find you solutions and meet your goals.
      </p>
      <button class="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
        Book a Free Consultation
      </button>
    </div>

    <!-- Right Image Section with Carousel Controls -->
    <div class=" relative flex justify-center items-center">
      <img src={hero} alt="Woman relaxing" class="max-w-full min-w-[500px] h-fit w-auto" />
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-[#4A0C59] mb-4">Our Treatments</h2>
    <p class="text-md text-gray-600 max-w-2xl mx-auto">
      At Casa Esthetica, we have made it our mission to assist women in all
      stages of their lives to feel happy, healthy and confident in the way
      they look and feel.
    </p>
    <div class="flex justify-center items-center my-8">
      <div class="h-px w-24 bg-gray-300"></div>
      <div
        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#4A0C59] text-2xl font-bold mx-4"
      >
        +
      </div>
      <div class="h-px w-24 bg-gray-300"></div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
    >
      <!-- Treatment Card 1 -->
      <div
        class="relative bg-[#4A0C59] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s1}
          alt="Treatment 1"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-[#4A0C59] bg-opacity-90 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-white text-left p-6 space-y-2">
            <li class="font-bold">After Childbirth / Non-Invasive Mommy Makeover</li>
            <li>Diastasis Recti</li>
            <li>Body Contouring</li>
            <li>Skin Tightening</li>
            <li>Bladder Leaks</li>
            <li>Vaginal Laxity</li>
            <li>Vaginal Dryness</li>
            <li>Labial Hypertrophy</li>
          </ul>
        </div>
        <div class="p-6 text-[#C787D5] text-center">
          <h3 class="font-bold text-xl">After Childbirth / Non-Invasive Mommy Makeover</h3>
        </div>
      </div>

      <!-- Treatment Card 2 -->
      <div
        class="relative bg-[#E6A9C8] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s2}
          alt="Treatment 2"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-[#E6A9C8] bg-opacity-90 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] text-left p-6 space-y-2">
            <li class="font-bold">Bladder Leaks and Incontinence</li>
            <li>Stress Incontinence</li>
            <li>Urge Incontinence</li>
            <li>Mixed Incontinence</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl">Bladder Leaks and Incontinence</h3>
        </div>
      </div>

      <!-- Treatment Card 3 -->
      <div
        class="relative bg-[#A0E2E6] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s3}
          alt="Treatment 3"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-[#A0E2E6] bg-opacity-90 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] text-left p-6 space-y-2">
            <li class="font-bold">Perimenopause and Menopause</li>
            <li>Hot Flashes</li>
            <li>Night Sweats</li>
            <li>Vaginal Dryness</li>
            <li>Mood Swings</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl">Perimenopause and Menopause</h3>
        </div>
      </div>

      <!-- Treatment Card 4 -->
      <div
        class="relative bg-[#D0A9E6] rounded-lg shadow-lg overflow-hidden group"
      >
        <img
          src={s4}
          alt="Treatment 4"
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-[#D0A9E6] bg-opacity-90 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] text-left p-6 space-y-2">
            <li class="font-bold">Breast Cancer Survivors</li>
            <li>Vaginal Rejuvenation</li>
            <li>Painful Intercourse</li>
            <li>Loss of Libido</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl">Breast Cancer Survivors</h3>
        </div>
      </div>
    </div>
    <div class="text-center mt-12">
      <button
        class="px-8 py-3 bg-[#4A0C59] text-white font-semibold rounded-full shadow-lg hover:bg-[#3A094A] transition duration-300"
        >View More</button
      >
    </div>
  </div>
</section>