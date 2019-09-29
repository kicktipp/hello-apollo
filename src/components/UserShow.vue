<template>
    <div v-if="!this.$apollo.queries.user.loading">
        Your name is: {{user.firstname}}
    </div>
</template>

<script>

    import userQuery from "./user";

    export default {
        apollo: {
            user: {
                query: userQuery
            }
        }
    }
</script>

