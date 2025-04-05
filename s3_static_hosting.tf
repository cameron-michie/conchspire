// Creating a new bucket
resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.BUCKET_NAME
}

// Enabling static hosting to the above created bucket
resource "aws_s3_bucket_website_configuration" "s3_bucket_config" {
  bucket = aws_s3_bucket.s3_bucket.id

  index_document {
    suffix = "index.html"
  }
}

// Configure bucket ownership controls to ensure proper access
resource "aws_s3_bucket_ownership_controls" "bucket_ownership" {
  bucket = aws_s3_bucket.s3_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

// Configure versioning to track changes
resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.s3_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

// Configure server-side encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "bucket_encryption" {
  bucket = aws_s3_bucket.s3_bucket.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

// Note: We're not blocking public access here because we need to allow the GitHub Actions workflow to upload files
// The CloudFront distribution will still protect the content from direct access
