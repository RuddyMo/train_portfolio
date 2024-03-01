<template>
    <div class="bgMain h-full flex flex-col shadow-lg rounded-primary gap-4 py-[40px] px-[54px] text-primary">
        <div class="flex justify-between pb-4 border-b-2 border-white border-opacity-10">
            <h1 class="text-htwo w-[80%]">
                <span class="font-semibold">Ruddy Morel -</span>
                <span class="font-normal"> Developpeur Full-stack</span>
            </h1>
            <button class="i-mdi-arrow-top-right text-secondary text-xl"></button>
        </div>
        <p class="text-body font-extralight">Journal</p>
        <div>
            <ul class="flex flex-col gap-6 px-4">
                <Jobdescription
                    date="• 25-janv"
                    title="Nouveau logiciel en flutter" />
                <Jobdescription
                    date="• 25-janv"
                    title="Nouveau logiciel en flutter" />
                <Jobdescription
                    date="• 25-janv"
                    title="Nouveau logiciel en flutter" />
                <Jobdescription
                    date="• 25-janv"
                    title="Nouveau logiciel en flutter" />
            </ul>
        </div>
    </div>
</template>

<script>
import Jobdescription from '../subcomponents/Jobdescription.vue';

export default {
  components: {
    Jobdescription
  }
};
</script>