<script lang="ts">
    import hero from "$lib/assets/home/hero.webp"
    import s1 from "$lib/assets/home/s1.png"
    import s2 from "$lib/assets/home/s2.png"
    import s3 from "$lib/assets/home/s3.png"
    import s4 from "$lib/assets/home/s4.png"
    import mission from "$lib/assets/home/mission.png"
    import doctor from "$lib/assets/home/doctor.webp"
    import t1 from "$lib/assets/home/t1.webp"
    import ask from "$lib/assets/home/ask.webp"

    import Article from "$lib/components/article.svelte"
    import Cta from "$lib/components/cta.svelte"

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
          class="absolute inset-0 bg-gradient-to-b to-[#4A0C59] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-white text-left p-6 space-y-2">
            <li class="font-bold">After Childbirth / Non-Invasive Mommy Makeover</li>
            <li>Diastasis Recti</li>
            <li>Body Contouring</li>
            <li>Skin Tightening</li>
            <li>Bladder Leaks</li>
          </ul>
        </div>
        <div class="p-6 text-[#C787D5] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">After Childbirth / Non-Invasive Mommy Makeover</h3>
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
          class="absolute inset-0 bg-gradient-to-b to-[#E6A9C8] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] text-left p-6 space-y-2">
            <li class="font-bold">Bladder Leaks and Incontinence</li>
            <li>Stress Incontinence</li>
            <li>Urge Incontinence</li>
            <li>Mixed Incontinence</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Bladder Leaks and Incontinence</h3>
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
          class="absolute inset-0 bg-gradient-to-b to-[#A0E2E6] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
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
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Perimenopause and Menopause</h3>
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
          class="absolute inset-0 bg-gradient-to-b to-[#D0A9E6] from-transparent bg-opacity-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ul class="text-[#4A0C59] text-left p-6 space-y-2">
            <li class="font-bold">Breast Cancer Survivors</li>
            <li>Vaginal Rejuvenation</li>
            <li>Painful Intercourse</li>
            <li>Loss of Libido</li>
          </ul>
        </div>
        <div class="p-6 text-[#4A0C59] text-center">
          <h3 class="font-bold text-xl group-hover:text-[transparent]">Breast Cancer Survivors</h3>
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


<section class="py-16 bg-[#F1F0FF] text-[#4C6583] font-semibold">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Left Content - Text and Button -->
    <div class="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
      <h2 class="text-lg font-semibold text-[#4A0C59] mb-2">Our Mission</h2>
      <h3 class="text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-6 text-[#0F204E]">
        Our Medicine For Good Health
      </h3>
      <p class="text-lg mb-4">
        At Casa Esthetica, we have made it our mission to assist women in all
        stages of their lives to feel happy, healthy and confident in the way
        they look and feel.
      </p>
      <p class="text-lg mb-4">
        Our founder, Dr. Corinne Sugihara, specialized as an OB/GYN
        for over 35 years and has delivered thousands of babies.
        During her career she saw a need for women to be taken
        care of and with advancements in
        technology, she opened Casa Esthetica so she could do just
        that.
      </p>
      <p class="text-lg mb-8">
        After having a conversation about your concerns and goals
        during your consultation, Dr. Sugihara will provide you with
        an individualized treatment plan to address your specific
        needs and get you the results you desire.
      </p>
      <button class="bg-[#4A0C59] hover:bg-[#3A094A] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center lg:inline-flex">
        Learn More About Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Right Content - Image -->
    <div class="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
      <img
        src={mission}
        alt="Our Mission"
        class="max-w-full h-auto rounded-lg "
      />
    </div>
  </div>
</section>


<section class="py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
    <div class="md:w-1/2 flex justify-center">
      <div class="relative  overflow-hidden flex items-center justify-center p-4">
        <img src={doctor} alt="Dr. Corinne Sugihara" class=" w-fit h-full object-cover" />
    </div>
    </div>

    <div class="md:w-1/2 text-center md:text-left">
      <p class="text-lg text-[#5C2869] font-semibold mb-2">About Dr. Corinne Sugihara</p>
      <h2 class="text-4xl md:text-5xl font-extrabold text-[#00234C] mb-4 leading-tight">Hello This Is Dr. Corinne Sugihara, MD</h2>
      <p class="text-xl text-[#5C2869] font-medium mb-6">MEDICAL DIRECTOR, FOUNDER</p>
      <p class="text-[#708399] mb-4">
        As a woman, at any given time, you may be called upon to be a mother, lover, friend, cook, companion, caretaker, cleaner, or breadwinner.
      </p>
      <p class="text-[#708399] mb-4">
        You’re expected to fulfill all these roles effortlessly, with expertise and grace. While the demands for self sacrifice can be never ending, the opportunities for self care can slip from slim to none.
      </p>
      <p class="text-[#708399] mb-6">
        That’s why at Casa Esthetica, we offer non-surgical, energy based micro treatments that treat your aesthetics and wellness concerns. Downtime is minimized and your body is stimulated to improve and repair itself without drugs, toxins or fillers. That way, your body looks and feels more like it used to so you can continue to do all the things you love.
      </p>
      <p class="text-[#708399] mb-6">
        That’s why at Casa Esthetica, we offer non-surgical, energy based micro treatments that treat your aesthetics and wellness concerns. Downtime is minimized and your body is stimulated to improve and repair itself without drugs.
      </p>
      <button class="bg-[#4A0C59] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 flex items-center justify-center mx-auto md:mx-0">
        Learn More About Me
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>


<section class="py-16 bg-[#FEEEF1]">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-[#4A0C59] mb-4">People Say About Us</h2>
    <p class="text-md text-gray-600 max-w-2xl mx-auto mb-12">
      Proin viverra, purus at bibendum molestie, lorem mi dignissim mauris, sit amet
      elementum massa augue vel massa
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testimonial Card 1 -->
      <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={t1} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Skin Tightening</p>
      </div>

      <!-- Testimonial Card 2 -->
      <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={t1} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Bladder Leaks</p>
      </div>

      <!-- Testimonial Card 3 -->
      <div class="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden group">
        <div class="flex justify-center mb-4">
          <div class="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={t1} alt="User Icon" class="object-cover rounded-full" />
          </div>
        </div>
        <p class="text-gray-700 text-left mb-4">
          Cras nibh diam, semper eu bibendum id,
          interdum ut neque. Nunc sed lacinia nisl,
          molestie pulvinar nunc. Suspendisse vel
          orci eu mauris consectetur viverra.
        </p>
        <p class="font-bold text-[#4A0C59] text-left">Matthew Ray</p>
        <p class="text-sm text-gray-500 text-left">Recurrent UTIs</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#E5E5E5]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
    <!-- Image Section -->
    <div class="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
      <img src={ask} alt="EvolveX Club" class="rounded-lg shadow-lg max-w-full h-auto" />
    </div>

    <!-- Content Section -->
    <div class="lg:w-1/2 text-center lg:text-left lg:pl-12">
      <h2 class="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#4A0C59] leading-tight mb-6">
        Ask About EvolveX <br class="hidden md:inline" />Club
      </h2>
      <p class="text-lg text-gray-700 mb-8">
        Our monthly subscription that allows you to get in shape and stay in shape
      </p>
      <button class="bg-[#7E57C2] hover:bg-[#673AB7] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center lg:inline-flex">
        Learn About EvolveX Club
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</section>

<Cta/>

<Article/>