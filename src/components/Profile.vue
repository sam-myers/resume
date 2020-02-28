<template>
    <vk-grid>
        <div class="uk-width-1-5">
            <img src="../assets/avatar.webp" alt="My beautiful face">
        </div>
        <div class="uk-width-4-5">
            <p>{{ bio }}</p>
        </div>
    </vk-grid>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            bio: {
                type: String,
                default: "I'm a software engineer who loves Go, continuous integration, containers, and quality tests. I love to learn and devote much of my time to reading up on the latest tech trends, frameworks, and security vulnerabilities."
            }
        }
    }
</script>

<style scoped>
    img {
        max-width: 8rem;
    }
    p {
        padding-top: 2rem;
    }
</style>
