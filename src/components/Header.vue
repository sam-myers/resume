<template>
    <vk-grid>
        <div class="uk-width-2-3">
            <NameTitle/>
        </div>
        <div class="uk-width-1-3">
            <Contact/>
        </div>
    </vk-grid>
</template>

<script>
    import Contact from "@/components/Contact";
    import NameTitle from "@/components/NameTitle";

    export default {
        name: 'Header',
        components: {
            Contact: Contact,
            NameTitle: NameTitle,
        }
    }
</script>
