# FAQ-BHARATFD

A **powerful** and **efficient backend** for managing FAQ entries using **Node.js**, **Express**, **MongoDB**, and **Redis**. 🚀

## 🔥 Features

- ✅ **Retrieve all FAQ entries** by language (Hindi, Gujarati, Marathi, Bengali)
- ✅ **Add new FAQ entries** with multi-language support
- ✅ **Update existing FAQ entries**
- ✅ **Delete FAQ entries**
- ✅ **Caching with Redis** to improve performance and reduce database load
- ✅ Follows **RESTful API standards**

## 🛠 Tech Stack

| Technology    | Description                               |
|---------------|-------------------------------------------|
| Node.js       | JavaScript runtime environment            |
| Express.js    | Web framework for building APIs           |
| MongoDB       | NoSQL database for storing FAQ data       |
| Mongoose      | MongoDB ODM (Object Data Modeling)        |
| Redis         | In-memory data store for caching FAQs     |
| dotenv        | Loads environment variables               |

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Redis** (local or Redis cloud service)
- **Git** for version control

### 🛠 Installation

1️⃣ **Clone the repository**:

```bash
git clone https://github.com/Piyush789-git/FAQ-BHARATFD.git
cd FAQBACKEND
```

2️⃣ **Install dependencies**:

```bash
npm install
```

3️⃣ **Set up environment variables**:

Create a `.env` file in the project root and add your configuration:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
REDIS_HOST=localhost
REDIS_PORT=6379
```

4️⃣ **Run the development server**:

```bash
npm start
```

Your server will be running at [http://localhost:3000](http://localhost:3000).

---

## 👀 API Endpoints

| Method | Endpoint               | Description                                                  | Auth Required |
|--------|------------------------|--------------------------------------------------------------|---------------|
| GET    | /api/faqs              | Fetch all FAQs or filter by language (`?lang=hi`, `?lang=gu`, `?lang=mr`, `?lang=bn`) | ❌ No         |
| POST   | /api/faqs              | Add a new FAQ                                               | ✅ Yes        |
| PUT    | /api/faqs/:id          | Update an existing FAQ entry                                 | ✅ Yes        |
| DELETE | /api/faqs/:id          | Delete a specific FAQ entry                                  | ✅ Yes        |

### 📌 Example API Requests

#### Fetch All FAQs
**Request:**

```http
GET /api/faqs?lang=hi
```

**Response:**

```json
[
  {
    "id": "1",
    "question": "FAQ क्या है?",
    "answer": "FAQ का अर्थ है अक्सर पूछे जाने वाले प्रश्न।",
    "language": "hi"
  }
]
```

#### Add a New FAQ
**Request:**

```http
POST /api/faqs
```

**Request Body for Hindi (hi):**

```json
{
  "question": "Node.js क्या है?",
  "answer": "Node.js एक JavaScript runtime है।",
  "language": "hi"
}
```

**Request Body for Bengali (bn):**

```json
{
  "question": "Node.js কী?",
  "answer": "Node.js একটি JavaScript runtime।",
  "language": "bn"
}
```

#### Update an FAQ
**Request:**

```http
PUT /api/faqs/:id
```

**Request Body:**

```json
{
  "question": "Updated question?",
  "answer": "Updated answer.",
  "language": "gu"
}
```

#### Delete an FAQ
**Request:**

```http
DELETE /api/faqs/:id
```

**Response:**

```json
{
  "message": "FAQ deleted successfully."
}
```

## 🚀 Performance Optimization with Redis

The application uses **Redis** to cache frequently accessed FAQ data, providing faster responses and reducing the load on the MongoDB database.

- **Caching FAQs**: When an FAQ entry is requested, it first checks the **Redis cache**. If the entry 
  
- **Efficient Cache Expiration**: Cache entries are set to expire after a certain duration to ensure data freshness, and they are refreshed whenever the underlying database is updated.

This helps to drastically reduce response times for frequently accessed data.

## 🤝 Contributing

1. **Fork** the repository.
2. **Create a new branch** for your feature or fix:

```bash
git checkout -b feature-branch
```

3. **Commit your changes**:

```bash
git commit -am 'Add new feature'
```

4. **Push to your branch**:

```bash
git push origin feature-branch
```

5. **Open a Pull Request** for review.


