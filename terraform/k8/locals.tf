locals {
  node_env = var.environment == "prod" ? "production" : "development"
  region_env_prefix = "${var.region}-${var.environment}"
  app_name = var.app_name
  naming_prefix = "${local.app_name}-${local.region_env_prefix}"
}

