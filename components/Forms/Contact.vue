<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
  >
    <input
      type="hidden"
      name="access_key"
      value="8b5e19e7-fac8-4c8d-a479-f2f20df5eabf"
    />
    <input
      type="hidden"
      name="subject"
      value="Neue Kontaktanfrage auf northway.blog"
    />
    <input type="hidden" name="from_name" value="Northway" />
    <input
      type="hidden"
      name="redirect"
      value="https://northway.blog/contact"
    />
    <input
      type="checkbox"
      name="botcheck"
      class="hidden"
      style="display: none"
    />

    <div class="sm:col-span-2">
      <label for="first-name" class="block text-sm font-medium text-gray-700"
        >First name</label
      >
      <div class="mt-1">
        <input
          id="first-name"
          type="text"
          name="first-name"
          autocomplete="given-name"
          class="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email*</label
      >
      <div class="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label for="message" class="block text-sm font-medium text-gray-700"
        >Message</label
      >
      <div class="mt-1">
        <textarea
          id="message"
          name="message"
          rows="4"
          class="block w-full border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
      </div>
    </div>
    <div class="sm:col-span-2">
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center border border-transparent bg-[#2f855a] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f855a] focus:outline-none focus:ring-2 focus:ring-[#2f855a] focus:ring-offset-2"
      >
        Let's talk
      </button>
    </div>
  </form>
</template>
