# Geo-Service

The **Geo-Service** project provides tools for IP-based services, including geolocation lookups via SypexGeo and IP range validations. You can fetch geolocation data based on an IP address, verify if an IP falls within a certain range, and check if IP ranges are valid.

### Features
- **SypexGeo Integration**: Retrieve geolocation details such as city, region, and country using the `/sypexgeo/:ip` endpoint.
- **IP Range Validation**: Verify if an IP is within a specified range with `/is-ip-in-range/` and validate ranges with `/is-valid-range/`.
- **Check IP Against List**: Compare a given IP against a list of IP addresses using the `/check-ip-against-list/` endpoint.

### Endpoints
1. **Get IP Location**:  
   `GET /sypexgeo/:ip`  
   Fetches geolocation details for a given IP using SypexGeo.

2. **Is IP in Range**:  
   `GET /is-ip-in-range/`  
   Checks if an IP is within a specified range.

3. **Is Valid IP Range**:  
   `GET /is-valid-range/`  
   Validates whether the given range is a valid IP range.

4. **Check IP Against List**:  
   `GET /check-ip-against-list/`  
   Compares an IP with a predefined list of IP addresses.

### Schemas
Each endpoint uses **Joi** for request validation to ensure proper input formats, requiring valid IP strings and ranges.

### Project Structure
```
├── Dockerfile
├── package.json
├── src
│   ├── app.ts
│   ├── controllers
│   ├── data
│   ├── libs
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── types
│   └── validation
├── tsconfig.json
└── rollup.config.mjs
```

### Running the Project
You can run the project either through Docker or locally:

#### Docker:
```bash
docker run -p 3000:3000 stekolshchykov/geo-service
```

#### Locally:
1. **Development**:
   ```bash
   yarn dev
   ```
2. **Build**:
   ```bash
   yarn build
   ```
3. **Production**:
   ```bash
   yarn start
   ```
