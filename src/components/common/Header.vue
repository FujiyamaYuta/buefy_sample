<template>
<nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://ndlonline.ndl.go.jp/resources/logo-home@2x.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <a class="navbar-item is-hidden-desktop" href="/" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fab fa-lg fa-github-alt"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop" href="/" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fab fa-lg fa-twitter"></i>
        </span>
      </a>
      <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuIndex">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

  <div id="navMenuIndex" class="navbar-menu">
    <div class="navbar-start">

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/">
          検索する
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
          <a class="navbar-item " href="/search">
            <span>
              <span class="icon has-text-bootstrap">
                <i class="fas fa-exchange-alt"></i>
              </span>
              <strong>キーワード検索</strong>
              <br>
              入力したキーワードから検索することが可能です。
            </span>
          </a>

          <hr class="navbar-divider">
          <a class="navbar-item " href="/search/cross">
            <span>
              <span class="icon has-text-success">
                <i class="fas fa-rocket"></i>
              </span>
              <strong>横断検索</strong>
              <br>
              全てのデータベースの共通項目で検索が可能です。
            </span>
          </a>

          <hr class="navbar-divider">
          <a class="navbar-item " href="/search/list">
            <span>
              <span class="icon has-text-primary">
                <i class="fas fa-certificate"></i>
              </span>
              <strong>いろいろな検索方法</strong>
              <br>
              検索したい情報を精密に設定して、検索することが可能です。
            </span>
          </a>
        </div>
      </div>

      <a class="navbar-item bd-navbar-item-documentation" href="/documentation">
        <span class="icon has-text-primary">
          <i class="fas fa-book"></i>
        </span>
        <span class="is-hidden-touch is-hidden-widescreen">
          Docs
        </span>
        <span class="is-hidden-desktop-only">
          データベース一覧
        </span>
      </a>
      <a class="navbar-item bd-navbar-item-videos " href="/organization">
        <span class="icon has-text-success">
          <i class="fas fa-play-circle"></i>
        </span>
        <span>参加組織一覧</span>
      </a>
      <a class="navbar-item bd-navbar-item-blog " href="/exhibition">
        <span class="icon bd-has-text-rss">
          <i class="fas fa-rss"></i>
        </span>
        <span>電子展示会</span>
      </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fab fa-lg fa-github-alt"></i>
          </span>
        </a>

        <b-dropdown hoverable>
            <button class="button is-hovered" slot="trigger">
                <span>日本語</span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>日本語</b-dropdown-item>
            <b-dropdown-item>英語</b-dropdown-item>
        </b-dropdown>

        <div class="navbar-item">
          <div class="field is-grouped is-grouped-multiline">
            <p class="control">
              <a class="button is-link" href="/">
                <strong>ログイン</strong>
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</nav>
</template>


<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
