<template> <div class="container-fluid" id="app">
    <div class="row">
      <nav class="col-md-2 d-md-bolck bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/onOff">On-Off Line Test</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/raddit">Raddit</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/start">Vue Start</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list">Vue List</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/event">Vue Event</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form">Vue Form</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comp">Vue Component</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/transition">Vue Transition</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mixin">Vue Mixin</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
