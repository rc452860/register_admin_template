import axios from 'axios'

let requester = axios.create({
    baseURL:"",
    timeout:5000
})

//请求过滤器
requester.interceptors.request.use((config)=>{
    return config;
},(err)=>{
    return Promise.reject(err);
});

//回应过滤器
requester.interceptors.response.use((res)=>{
    return res;
},err=>err)


//登陆
export const loginRequest = param => requester.post("/user/login",param);
//登出
export const logoutRequest = () => requester.post("/user/logout");