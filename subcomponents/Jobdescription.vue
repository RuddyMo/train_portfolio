<template>
    <li class="flex items-start gap-4 text-hfour">
      <div class="flex gap-2 items-center">
        <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
        <span class="text-secondary w-full whitespace-nowrap">{{ date }}:</span>
      </div>
      <span>{{ title }}</span>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      date: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>

  