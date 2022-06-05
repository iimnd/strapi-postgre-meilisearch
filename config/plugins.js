// config/plugins.js

module.exports = ({ env }) => ({
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST", "http://localhost:7700"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_API_KEY", ""),
    }
  }
})
