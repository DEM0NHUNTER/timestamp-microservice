# Timestamp Microservice

This is a simple Node.js/Express API that returns Unix and UTC timestamps for a given date or timestamp.

## 🌐 Live Demo

[http://localhost:3000/api/](http://localhost:3000/api/)

## 🛠️ Usage Examples

- `/api/2015-12-25`
  - ➡️ `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
- `/api/1451001600000`
  - ➡️ `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
- `/api/invalid-date`
  - ➡️ `{ "error": "Invalid Date" }`

## 🚀 Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/timestamp-microservice.git
cd timestamp-microservice
npm install
npm start
