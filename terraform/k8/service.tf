resource "kubernetes_service" "news_app" {
  metadata {
    name      = "news-app"  # Name of the service
    namespace = kubernetes_namespace.news_app.metadata.0.name  # Namespace where the service is deployed
  }

  spec {
    selector = {
      app = "news-app"  # Selector to match the pods with the label app=news-app
    }

    port {
      port        = kubernetes_deployment.news_app.spec.0.template.0.spec.0.container.0.port.0.container_port  # Port exposed by the service
      target_port = kubernetes_deployment.news_app.spec.0.template.0.spec.0.container.0.port.0.container_port  # Port on the container to forward traffic to
    }
  }

  depends_on = [ kubernetes_deployment.news_app ]  # Ensure the service is created after the deployment
}

