<template>
    <div class="paper">
        <div class="top-padding"></div>
        <vk-card padding="large" class="contents">
            <Header/>
            <hr>
            <Profile/>
            <hr>
        </vk-card>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Profile from "@/components/Profile";

    export default {
        name: "Paper",
        components: {
            Profile,
            Header
        }
    }
</script>

<style scoped>
    .contents {
        max-width: 70rem;
        margin: auto;
        width: 85%;
        box-shadow: 0 1rem 3rem rgba(0,0,0,0.175);
    }
    .top-padding {
        margin-top: 3rem;
    }
</style>
