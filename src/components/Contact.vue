<template>
    <div class="contact">
        <ul>
            <li><font-awesome-icon icon="phone"/><a v-bind:href="'tel:' + phone">{{ phone }}</a></li>
        </ul>
        <ul>
            <li><font-awesome-icon icon="envelope"/><a v-bind:href="'mailto:' + email">{{ email }}</a></li>
        </ul>
        <ul>
            <li><font-awesome-icon icon="map-marker-alt"/><a v-bind:href="'https://maps.google.com/?q=' + location">{{ location }}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        props: {
            phone: {
                type: String,
                default: "(925) 690-7320"
            },
            email: {
                type: String,
                default: "hello@sammye.rs"
            },
            location: {
                type: String,
                default: "Columbia, Missouri, USA"
            }
        }
    }
</script>

<style scoped>
    svg {
        width: 2rem !important;
    }
    ul {
        list-style: none;
        margin-top: 0;
        margin-bottom: .5rem;
    }
    .contact {
        border-left: 1px solid rgba(0,0,0,0.08);
    }
    a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
    }
</style>
