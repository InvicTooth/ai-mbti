# Use the official Rust image as the base image
FROM rust

# Set the working directory in the container
WORKDIR /

# Copy the application files into the working directory
COPY . /

# Build the application
RUN cargo build --release

# Expose port 8080
EXPOSE 8080

# Define the entry point for the container
CMD ["./target/release/server"]
