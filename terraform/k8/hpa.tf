# This resource defines a Kubernetes Horizontal Pod Autoscaler (HPA) for the news-app.
# The HPA automatically scales the number of pod replicas based on observed CPU utilization.

resource "kubernetes_horizontal_pod_autoscaler" "news_app_hpa" {
  metadata {
    name      = "${local.naming_prefix}-hpa"
    namespace = kubernetes_namespace.news_app.metadata.0.name
  }

  spec {
    max_replicas = 4  # The maximum number of pod replicas that the HPA can scale up to.
    min_replicas = 2  # The minimum number of pod replicas that the HPA can scale down to.

    scale_target_ref {
      api_version = "apps/v1"
      kind        = "Deployment"
      name        = kubernetes_deployment.news_app.metadata.0.name
    }

    # Define the metrics to use for scaling
    metric {
      type = "Resource"
      resource {
        name  = "cpu"
        target {
          type    = "Utilization"
          average_utilization = 50  # The target average CPU utilization (as a percentage) across all pods.
        }
      }
    }
  }
}