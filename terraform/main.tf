terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.35.1"
    }
  }
}

module "k8s" {
  source = "./k8"
  environment = var.environment
  region      = var.region
  app_name = "news-app"
  image_name =  "varmakarthik12/news-app:latest"
  container_port = 3000
  target_port = 3000
  health_check_path = "/api/health"
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}