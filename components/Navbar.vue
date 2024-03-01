<template>
        <nav class="flex justify-between mt-2 p-2">
            <img src="../assets/LayersLogo.png" alt="" class="h-fit pt-3">
            <ul class="flex text-secondary border-2 rounded-full p-2 border-elevation">
                <li class="hover:text-primary hover:bg-elevationTwo px-16 rounded-full py-4"><router-link to="/">Home</router-link></li>
                <li class="px-16 py-4 hover:text-primary hover:bg-elevationTwo rounded-full"><router-link to="/about">About</router-link></li>
                <li class="px-16 py-4 hover:text-primary hover:bg-elevationTwo rounded-full"><router-link to="/projects">Projects</router-link></li>
                <li class="px-16 py-4 hover:text-primary hover:bg-elevationTwo rounded-full"><router-link to="/contact">Contact</router-link></li>
            </ul>
            <div class="text-secondary text-2xl flex gap-3 pt-6 ">
                <button class="i-mdi-basketball hover:text-primary"></button>
                <button class="i-mdi-facebook hover:text-primary"></button>
                <button class="i-mdi-instagram hover:text-primary"></button>
            </div>
        </nav>
</template>