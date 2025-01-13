resource "kubernetes_config_map" "news_app_config" {
  metadata {
    name      = "news-app-config"
    namespace = kubernetes_namespace.news_app.metadata.0.name
  }

  data = {
    NODE_ENV = "production"
    # TODO: Move this to secrets manager
    NEWS_API_KEY = "API_KEY_HERE"
  }

  depends_on = [ kubernetes_namespace.news_app ] # Ensure the config map is created after the namespace
}