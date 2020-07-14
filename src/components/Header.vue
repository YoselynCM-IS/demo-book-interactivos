<template>
    <div>
        <b-navbar class="navbar" toggleable="lg" type="dark">
            <b-navbar-brand href="https://majesticeducacion.com.mx/">
              <img src="../assets/img/logoMajestic.svg" class="logo" alt="Majesti Education" />
              MED Majestic Education Digital
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav></b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <button class="btn home" @click="goStart()">Start</button>
                    </b-nav-item>
                    <b-nav-item>
                        <button class="btn home" @click="goHome()">Menu</button>
                    </b-nav-item>
                    <!-- <b-nav-item>
                        <button class="btn home" @click="goMenu()">Menu</button>
                    </b-nav-item> -->
                    <b-nav-item>
                        <button class="btn home" @click="goPage()"><font-awesome-icon icon="arrow-alt-circle-left"/> Go back</button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    goStart () {
      window.open('http://majesticeducationdigital.com/interactive/start/', '_self')
    },
    goHome () {
      window.open('http://majesticeducationdigital.com/interactive/demo/index.html', '_self')
    },
    goMenu () {
      this.$router.push({name: 'home'})
    },
    goPage () {
      this.$router.push({ name: 'page', params: { num: this.page } })
    }
  }
}
</script>
