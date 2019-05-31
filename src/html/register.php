<?php
    include('sql.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $sex = $_REQUEST['sex'];
    if($sex == 'man'){
        $sex = '男';
    } else if($sex == 'woman'){
        $sex = '女';
    }
    $sql = "select * from user where user_name = '$username' ";
    $result = $mysqli->query($sql);
    if($result->num_rows == 1){
        echo("<script >alert('账号已存在');location.href='../html/register.html';</script>");
    } else{
        $sql = "insert into user (user_name,user_password,user_email,user_sex) values ('$username','$password','$email','$sex')";
        $result = $mysqli->query($sql);
        echo($result);
        if($result == 1){
            echo("<script >alert('注册成功，点击跳转登录页');location.href='../html/login.html';</script>");
        } else{
            echo("<script >alert('注册失败，点击跳转注册页');location.href='../html/register.html';</script>");
        }
    }
    $mysqli->close();
?>