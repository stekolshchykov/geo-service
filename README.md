# GEO Service

## 1. Get IP Location (SypexGeo)

### Request:

GET /api/sypexgeo/8.8.8.8

### Expected Response:

```json
{
  "status": "success",
  "data": {
    "city": {
      "name_en": "Mountain View",
      "lat": 37.386,
      "lon": -122.0838
    },
    "region": {
      "name_en": "California"
    },
    "country": {
      "name_en": "United States",
      "iso": "US"
    }
  }
}
```

## 2. Get IP Location (IPInfo)

### Request:

GET /api/ipinfo/1.1.1.1

### Expected Response:

```json
{
  "status": "success",
  "data": {
    "ip": "1.1.1.1",
    "city": "Sydney",
    "region": "New South Wales",
    "country": "AU",
    "loc": "-33.8650,151.2094",
    "org": "APNIC and Cloudflare DNS Resolver project",
    "postal": "2000",
    "timezone": "Australia/Sydney"
  }
}
```

## 3. Check if IP is in Range

### Request:

POST /api/is-ip-in-range/

```json
{
  "ip": "192.168.1.10",
  "range": "192.168.1.0/24"
}
```

### Expected Response:

```json
{
  "status": "success",
  "data": true
}
```

## 4. Validate IP Range

### Request:

POST /api/is-valid-range/

```json
{
  "range": "192.168.0.0/16"
}
```

### Expected Response:

```json
{
  "status": "success",
  "data": true
}
```

## 5. Check IP Against List

### Request:

POST /api/check-ip-against-list/

```json
{
  "ip": "104.28.222.28",
  "ipList": "104.28.200.28-104.28.200.30\n104.28.222.28-104.28.222.30"
}
```

### Expected Response:

```json
{
  "status": "success",
  "data": true
}
```
