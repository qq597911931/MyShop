<?php
    include('sql.php');
    $userid = $_REQUEST['userid'];
    echo($userid);

    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $sql = "update `user` set `user_password` = '$password', `user_email` = '$email' where `user`.`user_name` = '$username'";
    $result = $mysqli->query($sql);
    if($result == false){
        echo("<script >alert('更改失败');location.href='../html/revise.html';</script>");
    } else{
        echo("<script >alert('更改成功，点击跳转主页');location.href='../html/main.php';</script>");
    }
    $mysqli->close();
?>