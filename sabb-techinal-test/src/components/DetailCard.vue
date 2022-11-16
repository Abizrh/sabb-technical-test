<template>
  <div class="container my-6">
    <v-row>
      <v-col cols="12" sm="8">
        <v-card>
          <v-card-title class="cyan darken-1">
            <span class="text-h5 white--text">
              {{ user.firstName }} {{ user.lastName }}
            </span>

            <v-spacer></v-spacer>

            <v-btn dark icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn dark icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn dark icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ user.phone }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ user.email }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ user.location?.country }}, {{ user.location?.city}}, {{user.location?.street}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-img :src="user.picture" height="200px"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["user"],
};
</script>

<style scoped>
.container {
  margin-left: 50px;
}
</style>
