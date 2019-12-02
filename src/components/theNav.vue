<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand href="#">
        <img src="./../assets/pokemon-logo.png" alt="pokemon logo" class="[ navheader_logo ]" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="[ navheader_list ]">
          <b-nav-item class="[ navheader_list--item ]">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item class="[ navheader_list--item ]">
            <router-link to="/grass">Grass</router-link>
          </b-nav-item>
          <b-nav-item class="[ navheader_list--item ]">
            <router-link to="/contact">Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navheader {
  &_logo {
    width: 180px;
  }
  &_list {
    font-weight: 900;
    margin-left: 50px;
    font-size: 24px;
    margin-top: 30px;
    &--item {
      margin-right: 20px;
    }
  }
}
.navbar-dark .navbar-nav .nav-link {
  color: yellow;
  &:hover {
    color: white;
  }
  &:focus {
    color: white;
  }
}
</style>
