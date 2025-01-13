variable "environment" {
  description = "The environment for deployment"
  type        = string
}

variable "region" {
  description = "The region for deployment"
  type        = string
}

variable "app_name" {
  description = "The name of the application"
  type        = string
}

variable "container_port" {
    description = "The port that the container listens on"
    type        = number
}

variable "target_port" {
    description = "The port that the service forwards requests to"
    type        = number
}

variable "health_check_path" {
    description = "The path to use for the health check"
    type        = string
}

variable "image_name" {
    description = "The name of the image to use for the container"
    type        = string
}

variable "cpu_limit" {
    description = "The CPU limit for the container"
    type        = string
    default     = "500m"
}

variable "cpu_request" {
    description = "The CPU request for the container"
    type        = string
    default     = "250m"
}

variable "memory_limit" {
    description = "The memory limit for the container"
    type        = string
    default     = "512Mi"
}

variable "memory_request" {
    description = "The memory request for the container"
    type        = string
    default     = "256Mi"
}