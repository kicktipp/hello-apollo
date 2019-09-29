<template>
    <div v-if="!this.$apollo.queries.user.loading">
        Edit your name:
        <input v-model="user.firstname"/>
    </div>
</template>

<script>
    import gql from "graphql-tag";

    export default {
        apollo: {
            user: {
                query: gql`{
                    user (id: 1) {
                        id
                        age
                        firstname
                    }
                }`,
                update: data => data.user
            }
        }
    }
</script>

