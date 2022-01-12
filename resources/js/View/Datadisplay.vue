<template>
    <div class="container-fluid">
        <div class="col">
            <h1>titre</h1>
        </div>

        <div class="col"><hr /></div>

        <div class="col">
            <h3>Sous-titre</h3>
        </div>
        <div class="col">
            <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                harum quia, libero earum, neque animi consequatur dolor nisi
                placeat illum ducimus nostrum culpa recusandae architecto?
                Necessitatibus eos commodi inventore. Qui?
            </p>
        </div>
        <div class="col"><hr /></div>

        <div class="mainContent">
            <div class="col route">
                <v-layout>
                    <v-card class="mr-1 pa-2">
                        <pre> Method </pre>
                    </v-card>
                    <v-card class="pa-2">
                        <pre> /api/v1/shops </pre>
                    </v-card>
                </v-layout>
            </div>
            <!-- Dans le cas ou il ya des datas à entrée -->
            <template>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    hide-default-footer
                    disable-sort
                    class="elevation-1"
                ></v-data-table>
            </template>
        </div>
        <div class="col">
            <v-card class="sucess-response mt-5 theme--dark">
                <v-card-subtitle class="theme--dark">
                    <v-layout>
                        <span>Réponse</span>
                        <v-spacer></v-spacer>
                        <v-chip color="green">Succès</v-chip>
                    </v-layout>
                </v-card-subtitle>
                <pre>
                <code class="language-json hljs">

                </code>
            </pre>
                <div class="response-content" height="200px"></div>
            </v-card>
        </div>
        <div class="col">
            <v-card class="sucess-response mt-5 theme--dark">
                <v-card-subtitle class="theme--dark">
                    <v-layout>
                        <span>Réponse</span>
                        <v-spacer></v-spacer>
                        <v-chip color="red">Erreur</v-chip>
                    </v-layout>
                </v-card-subtitle>
                <pre>
                <code class="language-json hljs">

                </code>
            </pre>
                <div class="response-content" height="200px"></div>
            </v-card>
        </div>

        <!-- <div class="error-response">
            <div class="titlecontent">
                <span>Réponse</span>
                <span>Erreur</span>
            </div>
            <div class="response-content"></div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "Datadisplay",
    data() {
        return {
            headers: [
                {
                    text: "Dessert (100g serving)",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Calories", value: "calories" },
                { text: "Fat (g)", value: "fat" },
                { text: "Carbs (g)", value: "carbs" },
                { text: "Protein (g)", value: "protein" },
                { text: "Iron (%)", value: "iron" },
            ],
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: "1%",
                },
            ],
        };
    },
};
</script>

<style></style>
