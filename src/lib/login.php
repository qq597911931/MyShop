<?php
    include('sql.php');
    $user = $_REQUEST['user'];
    $password = $_REQUEST['password'];
    $type = $_REQUEST['type'];
    // $user = "u123456";
    // $password = "123456789";
    // $type = "user_name";

    $sql = "select * from user where $type = '$user' and user_password = '$password'";
    $result = $mysqli->query($sql);
    if($result->num_rows == 0){
        echo("密码错误，登录失败");
    } else{
        echo(json_encode($result->fetch_assoc()));
    }
    $mysqli->close();
?>