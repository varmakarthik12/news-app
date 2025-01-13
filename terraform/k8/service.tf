resource "kubernetes_service" "news_app" {
  metadata {
    name      = "${local.naming_prefix}-service"  # Name of the service
    namespace = kubernetes_namespace.news_app.metadata.0.name  # Namespace where the service is deployed
  }

  spec {
    selector = {
      app = local.app_selector  # Selector to match the pods with the label app=news-app
    }

    port {
      port        = var.container_port  # Port exposed by the service
      target_port = var.target_port  # Port on the container to forward traffic to
    }
  }

  depends_on = [ kubernetes_deployment.news_app ]  # Ensure the service is created after the deployment
}

