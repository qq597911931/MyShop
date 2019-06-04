<?php
    include('sql.php');
    $username = $_REQUEST['username'];
    $phonenumber = $_REQUEST['phonenumber'];
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where user_name = '$username' ";
    $result = $mysqli->query($sql);
    if($result->num_rows == 1){
        echo("账号已存在");
    } else{
        $sql = "select * from user where user_phone = '$phonenumber' ";
        $result = $mysqli->query($sql);
        if($result->num_rows == 1){
            echo("手机已注册");
        }  else{
            $sql = "select * from user where user_email = '$email' ";
            $result = $mysqli->query($sql);
            if($result->num_rows == 1){
                echo("邮箱已注册");
            }  else{
                $sql = "insert into user (user_name,user_password,user_email,user_phone) values ('$username','$password','$email','$phonenumber')";
                $result = $mysqli->query($sql);
                if($result == 1){
                    echo("注册成功");
                } else{
                    echo("服务器响应失败");
                }
            }
        }
    }
    $mysqli->close();
?>