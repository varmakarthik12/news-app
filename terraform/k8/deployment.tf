locals {
  app_selector = "${local.naming_prefix}-selector"
}

resource "kubernetes_deployment" "news_app" {
  metadata {
    # Metadata for the deployment
    name      = "${local.naming_prefix}-deployment"
    namespace = kubernetes_namespace.news_app.metadata.0.name
  }

  spec {
    # Number of replicas for the deployment
    replicas = 2

    selector {
      # Selector to match the pods with the label app=news-app
      match_labels = {
        app = local.app_selector
      }
    }

    template {
      metadata {
        # Labels for the pod template
        labels = {
          app = local.app_selector
        }
      }

      spec {
        container {
          # Container definition for the news-app
          name  = "${local.naming_prefix}-container"
          image = var.image_name

          port {
            # Expose port on the container
            container_port = var.container_port
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
              cpu    = var.cpu_limit
              memory = var.memory_limit
            }
            requests = {
              cpu    = var.cpu_request
              memory = var.memory_request
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
              path = var.health_check_path
              port = var.container_port
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