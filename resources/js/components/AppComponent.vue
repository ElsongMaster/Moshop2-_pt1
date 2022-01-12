<template>
    <v-app id="inspire">
        <v-navigation-drawer permanent app>
            <!-- v-list -->
            <v-list>
                <v-list-group
                    v-for="item in vListItems"
                    :key="item.title"
                    :prepend-icon="item.icon"
                >
                    <template v-slot:activator>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </template>
                    <v-list v-if="item.subItems">
                        <v-list-item
                            v-for="subItem in item.subItems"
                            :key="subItem.title"
                            :prepend-icon="item.icon"
                            :to="{
                                name: 'Datadisplay',
                                params: {
                                    nameroute: subItem.paramsRoute[0],
                                    nameaction: subItem.paramsRoute[1],
                                },
                            }"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{
                                    subItem.title
                                }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <!-- <div class="d-flex flex-column"> -->
        <v-container>
            <v-app-bar app class="">
                <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

                <v-toolbar-title>MoShop</v-toolbar-title>
            </v-app-bar>

            <v-main>
                <!-- <p>Elson</p> -->
                <router-view :key="$route.path" />
            </v-main>
        </v-container>
        <!-- </div> -->
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            message: "Bienvenue sur Vue 3",
            link1: {
                title: "Guide",
                icon: "v-icon notranslate mdi mdi-script-text theme--dark",
                subItems: null,
            },
            vListItems: [
                {
                    title: "Guide",
                    icon: "v-icon notranslate mdi mdi-script-text theme--dark",
                    subItems: [],
                },
                {
                    title: "Utilisateur",
                    icon: "v-icon notranslate mdi mdi-account-circle theme--dark",
                    subItems: [
                        {
                            paramsRoute: ["user", "introduction"],
                            title: "Introduction",
                        },
                        {
                            paramsRoute: ["user", "register"],
                            title: "Créer un compte",
                        },
                        {
                            paramsRoute: ["user", "login"],
                            title: "Se connecter",
                        },
                        {
                            paramsRoute: ["user", "user"],
                            title: "Données utilisateur",
                        },
                        {
                            paramsRoute: ["user", "profile"],
                            title: "Modifier le profil",
                        },
                        {
                            paramsRoute: ["user", "profilepicture"],
                            title: "Modifier la photo de profil",
                        },
                    ],
                },
                {
                    title: "Magasins",
                    icon: "v-icon notranslate mdi mdi-store theme--dark",
                    subItems: [
                        {
                            paramsRoute: ["shops", "introduction"],
                            title: "Introduction",
                        },
                        {
                            paramsRoute: ["shops", "molengeek"],
                            title: "Magasin de Molengeek",
                        },
                        {
                            paramsRoute: ["shops", "all"],
                            title: "Tout les magasins",
                        },
                        {
                            paramsRoute: ["shops", "auth"],
                            title: "Mon magasin",
                        },
                        {
                            paramsRoute: ["shops", "show"],
                            title: "Magasin en particulier",
                        },
                    ],
                },
                {
                    title: "Produits",
                    icon: "v-icon notranslate mdi mdi-liquor theme--dark",
                    subItems: [
                        {
                            paramsRoute: ["products", "introduction"],
                            title: "Introduction",
                        },
                        {
                            paramsRoute: ["products", "create"],
                            title: "Créer un produit",
                        },
                        {
                            paramsRoute: ["products", "destroy"],
                            title: "Supprimer un produit",
                        },
                        {
                            paramsRoute: ["products", "show"],
                            title: "Afficher un produit",
                        },
                        {
                            paramsRoute: ["products", "edit"],
                            title: "Modifier un produit",
                        },
                        {
                            paramsRoute: ["products", "picture"],
                            title: "Modifier l'image d'un produit",
                        },
                    ],
                },
                {
                    title: "Panier",
                    icon: "v-icon notranslate mdi mdi-cart theme--dark",
                    subItems: [
                        {
                            paramsRoute: ["carts", "introduction"],
                            title: "introduction",
                        },
                        {
                            paramsRoute: ["carts", "add"],
                            title: "Ajouter un produit au panier",
                        },
                        {
                            paramsRoute: ["carts", "auth"],
                            title: "Mon panier",
                        },
                    ],
                },
                {
                    title: "Commandes",
                    icon: "v-icon notranslate mdi mdi-package-variant-closed theme--dark",
                    subItems: [
                        {
                            paramsRoute: ["orders", "introduction"],
                            title: "introduction",
                        },
                        {
                            paramsRoute: ["orders", "all"],
                            title: "Mes commandes",
                        },
                        {
                            paramsRoute: ["orders", "buy"],
                            title: "Passer commande(acheter)",
                        },
                        {
                            paramsRoute: ["orders", "show"],
                            title: "Voir une commande",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style></style>
