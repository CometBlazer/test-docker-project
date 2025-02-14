# Test Docker Project

A TypeScript Express application containerized with Docker.

## Setup

1. Install dependencies:
```npm install```

2. Build Docker image:
```docker build -t yourapp:1.0 .```

3. Run Docker container:
```docker run -p 8080:8080 yourapp:1.0```

## API Endpoints

- GET `/`: Returns Hello World message
