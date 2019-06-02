<?php
    $mysql_conf = array(
        'host'=>'localhost:3306',
        'db-user'=>'root',
        'db-pwd'=>'',
        'db'=>'rhqsql',
    );
    $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db-user'],$mysql_conf['db-pwd']);
    if($mysqli->connect_errno){
        die('链接错误'.$mysqli->connect_errno);
    }
    $mysqli->query("set names 'utf8';");
    $select_db = $mysqli->select_db($mysql_conf['db']);
    if(!$select_db){
        die('选择数据库错误'.$mysqli->error);
    }

?>