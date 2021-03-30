<template>
  <div>
    <!-- <mailchimp-subscribe
      url="https://blog.us4.list-manage.com/subscribe/post-json"
      user-id="823480a800fce9acd6354357f"
      list-id="b5cc0cb7d8"
      @error="onError"
      @success="onSuccess"
    >
      <template v-slot="{ subscribe, setEmail, error, success, loading }">
        <form @submit.prevent="subscribe" class="px-4">
          <div class="py-20 mx-auto mt-20 rounded shadow-2xl max-w-7xl">
            <div class="max-w-3xl px-4 mx-auto">
              <h2 class="max-w-4xl mx-auto text-xl md:text-2xl xl:text-3xl">Never miss a new post</h2>
              <p class="max-w-4xl mx-auto mt-2 text-lg md:text-2xl">Get notified when a new post is released</p>
              <label for="newsletter" class="block mt-8">Add your email</label>
              <input type="email" placeholder="myemail@provider.com" id="newsletter" @input="setEmail($event.target.value)" class="block w-full px-2 py-4 mt-2 text-xl text-gray-800 bg-gray-200 focus:outline-none focus:shadow-outline"/>
              <div v-if="error" class="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
                <span v-html="error" class="block sm:inline"></span>
              </div>
              <div v-if="success" class="relative px-4 py-3 mt-4 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
                <span class="block sm:inline">You have been subscribed successfully</span>
              </div>
              <button type="submit" class="px-8 py-3 mt-8 bg-transparent border-2 border-green-700 transition-bg focus:outline-none focus:shadow-outline hover:bg-green-700 hover:text-white">Submit</button>
              <div v-if="loading">Loading…</div>
            </div>
          </div>
        </form>
      </template>
    </mailchimp-subscribe> -->

    <footer
      class="py-8 mt-10 text-white bg-gray-900 border-t-4 border-green-700 sm:mt-20"
    >
      <div class="justify-between max-w-4xl px-4 mx-auto sm:flex">
        <div class="flex">
          <p class="pr-6 text-white align-middle">© 2020 Northway</p>
          <a
            href="https://www.instagram.com/oh.north/"
            class="pr-4 align-middle"
          >
            <svg
              class="h-full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              xml:space="preserve"
            >
              <g id="Outline_Icons">
                <g>
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M23.5,19.5c0,2.209-1.791,4-4,4h-15    c-2.209,0-4-1.791-4-4v-15c0-2.209,1.791-4,4-4h15c2.209,0,4,1.791,4,4V19.5z"
                  ></path>
                  <line
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="0.5"
                    y1="8.5"
                    x2="7.705"
                    y2="8.5"
                  ></line>
                  <line
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="16.27"
                    y1="8.5"
                    x2="23.524"
                    y2="8.5"
                  ></line>
                  <circle
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="12"
                    cy="12"
                    r="5.5"
                  ></circle>
                  <rect
                    x="18.5"
                    y="3.5"
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    width="3"
                    height="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="2.5"
                    y1="1"
                    x2="2.5"
                    y2="8.5"
                  ></line>
                  <line
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="4.5"
                    y1="0.5"
                    x2="4.5"
                    y2="8.5"
                  ></line>
                  <line
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="6.5"
                    y1="0.5"
                    x2="6.5"
                    y2="8.5"
                  ></line>
                </g>
              </g>
            </svg>
          </a>
          <a href="mailto:hello@northway.blog" class="align-middle">
            <svg
              class="h-full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              xml:space="preserve"
            >
              <g id="Outline_Icons_1_">
                <g id="Outline_Icons">
                  <g>
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M23.5,18     c0,0.828-0.672,1.5-1.5,1.5H2c-0.828,0-1.5-0.672-1.5-1.5V6c0-0.829,0.672-1.5,1.5-1.5h20c0.828,0,1.5,0.671,1.5,1.5V18z"
                    ></path>
                    <polyline
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="     20.5,8.5 12,14 3.5,8.5    "
                    ></polyline>
                    <line
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      x1="3.5"
                      y1="16"
                      x2="7"
                      y2="14"
                    ></line>
                    <line
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      x1="20.5"
                      y1="16"
                      x2="17"
                      y2="14"
                    ></line>
                  </g>
                </g>
                <g id="New_icons_1_"></g>
              </g>
            </svg>
          </a>
        </div>
        <div class="mt-4 sm:mt-0">
          <n-link to="/privacy-policy" class="mr-2 text-white"
            >Privacy Policy</n-link
          >
          <n-link to="/site-note" class="text-white">Site Note</n-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  methods: {
    onError() {
      // handle error
    },
    onSuccess() {
      // handle success
    }
  }
}
</script>
