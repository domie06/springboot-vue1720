const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm2bl10/",
            name: "ssm2bl10",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2bl10/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "广告管理系统"
        } 
    }
}
export default base
