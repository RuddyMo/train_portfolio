<template>
  <main class="px-20 max-w-[1600px] mx-auto flex flex-col">  
    <Navbar />
    <section class="text-white mt-12 flex flex-col gap-4">
      <div class="flex gap-4 max-lg:flex-col">
        <div class="w-1/2 max-lg:w-full flex flex-col gap-4">
          <Journaling />
          <OrangeSoft />
        </div>
        <div class="w-1/2 max-lg:w-full flex flex-col gap-4">
          <Adventure />
          <div class="flex max-lg:flex-col gap-4">
            <Phone />
            <div class="flex w-1/2 max-lg:w-full flex-col gap-1 max-lg:gap-4">
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
