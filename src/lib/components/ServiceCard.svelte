<script>
	import { onMount } from "svelte";

    export let title;
    export let description;
</script>

<div class="service-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div class="icon text-purple-600 mb-4">
    </div>
    <h3 class="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p class="text-gray-600">{description}</p>
</div>

<style>
    .service-card {
        transition: transform 0.3s ease-in-out;
    }
    .service-card:hover {
        transform: translateY(-5px);
    }
</style>