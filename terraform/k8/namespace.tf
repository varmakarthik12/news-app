resource "kubernetes_namespace" "news_app" {
  metadata {
    name = "news-app"
  }
}