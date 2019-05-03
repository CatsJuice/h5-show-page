<?php

/*
 * 数据库连接类
 * */

class DbManage{
    private $conn;

    /*
     * 单句查询
     */
    public  function executeSqlTxt($sqlTxt){
        $this->conn = mysqli_connect("127.0.0.1","root","","public")
        or die("失败".mysqli_error());
        $result = mysqli_query($this->conn,$sqlTxt);

        return $result;
    }

    /*
     * 关闭数据库
     */
    public function closeConnection($result){
        mysqli_free_result($result);
        mysqli_close($this->conn);
    }
}

?>