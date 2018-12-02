const isProduction = process.env.NODE_ENV === 'production';

export const apiEndpoint = isProduction ? 
  "http://localhost:3333/api/" : "http://localhost:3333/api/";

export const API = {
  /**
   * GET blog
   * ?slug=javascript
   */
  BLOG: apiEndpoint + "v1/blog"
  
}