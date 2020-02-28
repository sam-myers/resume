<template>
    <div>
        <h1>{{ name }}</h1>
        <h4>{{ title }}</h4>
    </div>
</template>

<script>
    export default {
        name: "NameTitle",
        props: {
            name: {
                type: String,
                default: "Sam Myers"
            },
            title: {
                type: String,
                default: "DevOps Engineer"
            }
        }
    }
</script>

<style scoped>
    h1 {
        line-height: 1rem;
    }
    h4 {
        line-height: 1rem;
    }
</style>
