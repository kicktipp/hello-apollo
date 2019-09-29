<template>
    <div v-if="!this.$apollo.queries.user.loading">
        Edit your name:
        <input v-model="user.firstname" />
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

