<script lang="ts">
  import cta from "$lib/assets/cta.webp"
  let name = '';
  let email = '';
  let phone = '';
  let date = '';
  let time = '';
  let loading = false;
  let message = '';

  interface ApiResponse {
    success?: boolean;
    message?: string;
    error?: string;
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    message = '';

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, date, time })
      });

      const data: ApiResponse = await res.json();
      if (res.ok) {
        message = '✅ Appointment request sent successfully!';
      } else {
        message = '❌ ' + (data.error || 'Something went wrong.');
      }
    } catch (err) {
      message = '❌ Network error.';
    } finally {
      loading = false;
      name = email = phone = date = time = '';
    }
  }
</script>

<section class="flex flex-col md:flex-row items-center justify-center py-20 bg-[#DD47A0] text-gray-800 px-6">
  <!-- Appointment Form -->
  <div class="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg md:mr-12 ">
    <h2 class="text-2xl font-bold text-gray-900 mb-3">Book An Appointment</h2>
    <p class="text-gray-500 text-sm mb-8">
      Please feel welcome to contact our friendly reception staff with any general or medical enquiry. 
      Our doctors will receive or return any urgent calls.
    </p>

    <form on:submit={handleSubmit} class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Name"
            bind:value={name}
            class="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">
            <i class="fa-regular fa-user"></i>
          </span>
        </div>

        <div class="relative">
          <input
            type="email"
            placeholder="Email"
            bind:value={email}
            class="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">
            <i class="fa-regular fa-envelope"></i>
          </span>
        </div>

        <div class="relative">
          <input
            type="tel"
            placeholder="Phone"
            bind:value={phone}
            class="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">
            <i class="fa-solid fa-phone"></i>
          </span>
        </div>

        <div class="relative">
          <input
            type="date"
            bind:value={date}
            class="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">
            <i class="fa-regular fa-calendar"></i>
          </span>
        </div>

        <div class="relative sm:col-span-2">
          <input
            type="time"
            bind:value={time}
            class="w-full rounded-full border border-gray-300 py-3 pl-10 pr-4 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">
            <i class="fa-regular fa-clock"></i>
          </span>
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-4 rounded-full mt-6 transition duration-300"
      >
        Make Appointment →
      </button>
    </form>
  </div>
  {#if message}
  <p class="mt-4 text-center text-sm font-medium">{message}</p>
{/if}

  <!-- Right Side Illustration -->
  <div class="hidden md:flex justify-end items-center">
    <img
      src={cta}
      alt="Appointment Illustration"
      class="min-w-sm"
    />
  </div>
</section>
