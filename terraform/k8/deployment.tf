resource "kubernetes_deployment" "news_app" {
  metadata {
    # Metadata for the deployment
    name      = "news-app"
    namespace = kubernetes_namespace.news_app.metadata.0.name
  }

  spec {
    # Number of replicas for the deployment
    replicas = 2

    selector {
      # Selector to match the pods with the label app=news-app
      match_labels = {
        app = "news-app"
      }
    }

    template {
      metadata {
        # Labels for the pod template
        labels = {
          app = "news-app"
        }
      }

      spec {
        container {
          # Container definition for the news-app
          name  = "news-app"
          image = "varmakarthik12/news-app:latest"

          port {
            # Expose port 80 on the container
            container_port = 3000
          }

          env_from {
            # Load environment variables from the config map
            config_map_ref {
              name = kubernetes_config_map.news_app_config.metadata.0.name 
            }
          }

          resources {
            # Define resource limits and requests
            limits = {
              cpu    = "500m"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "256Mi"
            }
          }

          readiness_probe {
            # Readiness probe to check if the app is ready to serve traffic
            http_get {
              path = "/"
              port = 3000
            }
            initial_delay_seconds = 10
            period_seconds        = 5
          }

          liveness_probe {
            # Liveness probe to check if the app is running
            http_get {
              path = "/api/health"
              port = 3000
            }
            initial_delay_seconds = 20
            period_seconds        = 10
          }
        }
      }
    }
  }

  depends_on = [ kubernetes_config_map.news_app_config ]   # Ensure the deployment is created after the config map
}