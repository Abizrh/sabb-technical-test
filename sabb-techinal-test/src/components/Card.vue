<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<style>
.moviesRow{
    border-radius: 10px;
    transition: .3s;
    position: relative;
    margin-bottom: 10px;
}

.moviesRow img:hover{
    transform: scale(1.1);
    border: 1px solid #222;
}

.fav{
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.50);
    color: var(--second-color);
    padding: 5px;
    border-radius: 0px 0px 10px 0px;
    cursor: pointer;
    backdrop-filter: blur(10px);
}

.fav .MuiSvgIcon-root:hover{
    color: var(--second-color);
}


.moviesRow img{
    max-height: 250px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
}


.gridMovies{
    flex: 1 1;
}


@media (max-width:350px) {
    .gridMovies{
        flex: 1;
    }

    .gridMovies img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>