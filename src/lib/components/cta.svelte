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

    <form class="bg-white shadow-lg rounded-2xl max-w-lg mx-auto md:mx-0">
        <div class="space-y-5">
          <input type="text" placeholder="Full Name" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <input type="email" placeholder="Email Address" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"/>
          <textarea rows="4" placeholder="Your Message" class="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
          <button type="submit" class="bg-[#6A1B9A] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#4A0C59] transition duration-300">
            Submit
          </button>
        </div>
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
