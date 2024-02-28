<template>
        <nav class="flex justify-between mt-2 p-2 mx-16">
            <img src="../assets/images/Logo.png" alt="" class="h-fit pt-3">
            <ul class="flex text-gray-400 border-2 rounded-full p-2 border-fond-bloc">
                <li class="hover:text-white hover:bg-fond-bloc px-16 rounded-full py-4"><router-link to="/">Home</router-link></li>
                <li class="px-16 py-4 hover:text-white hover:bg-fond-bloc rounded-full"><router-link to="/about">About</router-link></li>
                <li class="px-16 py-4 hover:text-white hover:bg-fond-bloc rounded-full"><router-link to="/projects">Projects</router-link></li>
                <li class="px-16 py-4 hover:text-white hover:bg-fond-bloc rounded-full"><router-link to="/contact">Contact</router-link></li>
            </ul>
            <div class="text-gray-400 text-2xl flex gap-3 pt-6 ">
                <button class="i-mdi-basketball hover:text-white"></button>
                <button class="i-mdi-facebook hover:text-white"></button>
                <button class="i-mdi-instagram hover:text-white"></button>
            </div>
        </nav>
</template>