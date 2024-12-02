import axios from "axios";

// Tạo instance của Axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.example.com", // Base URL cho API
  timeout: 10000, // Thời gian chờ (10 giây)
  headers: {
    "Content-Type": "application/json", // Loại dữ liệu gửi
  },
});

// Thêm Interceptor cho request
axiosInstance.interceptors.request.use(
  (config) => {
    // Gắn Token nếu cần
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi khi gửi request
    return Promise.reject(error);
  }
);

// Thêm Interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý thành công
    return response.data;
  },
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      // Lỗi từ server (4xx, 5xx)
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      // Không nhận được phản hồi
      console.error("No Response:", error.request);
    } else {
      // Lỗi khi cài đặt request
      console.error("Axios Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
