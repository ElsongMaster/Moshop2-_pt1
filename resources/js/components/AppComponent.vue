<template>
    <v-app id="inspire">
        <v-navigation-drawer permanent app>
            <!-- v-list -->
        </v-navigation-drawer>

        <v-app-bar app>
            <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <!--router view (key) -->
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            message: "Bienvenue sur Vue 3",
        };
    },
};
</script>

<style></style>
