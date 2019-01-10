export const isProduction = window.location.hostname !== 'localhost'
// process.env.NODE_ENV === 'production';

export const apiEndpoint = isProduction ? 
  "https://fozg.net/blog/api/" : "http://localhost:3501/blog/api/";

export const API = {
  /**
   * GET blog
   * ?slug=javascript
   */
  BLOG: apiEndpoint + "v1/blog"
  
}