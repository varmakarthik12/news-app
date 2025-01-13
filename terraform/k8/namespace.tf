resource "kubernetes_namespace" "news_app" {
  metadata {
    name = "${local.naming_prefix}-namespace"
  }
}