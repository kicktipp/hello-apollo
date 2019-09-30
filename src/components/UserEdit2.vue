<template>
    <div v-if="!this.$apollo.queries.user.loading">
        {{user.firstname}}
        Edit your name:
        <input v-model="user.firstname"/>
    </div>
</template>

<script>
    import userQuery from "./user";

    export default {

        data() {
            return {
                user: {}
            }
        },
        apollo: {
            user: {
                query: userQuery,
                manual: true,
                result ({data}) {
                     this.user = {...data.user};
                },
            }
        }
    }
</script>

