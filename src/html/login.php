<?php
    include('sql.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sql = "select * from user where user_name = '$username' and user_password = '$password'";
    $result = $mysqli->query($sql);
    if($result->num_rows == 0){
        echo("密码错误，登录失败");
    } else{
        echo("登陆成功，点击跳转主页");
    }
    $mysqli->close();
?>