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
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}