resource "kubernetes_pod_disruption_budget" "news_app_pdb" {
  metadata {
    name      = "${local.naming_prefix}-pdb"
    namespace = kubernetes_namespace.news_app.metadata.0.name
  }

  spec {
    max_unavailable = 2

    selector {
      match_labels = {
        app = local.app_selector
      }
    }
  }
}
