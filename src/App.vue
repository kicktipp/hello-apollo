<template>
    <div id="app">
        <UserShow/>
        <UserEdit/>
        <UserEdit2/>
    </div>
</template>

<script>
    import UserShow from './components/UserShow.vue'
    import UserEdit from './components/UserEdit.vue'
    import UserEdit2 from './components/UserEdit2.vue'

    export default {
        name: 'app',
        components: {UserShow, UserEdit, UserEdit2}
    }
</script>

