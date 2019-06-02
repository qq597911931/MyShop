<?php
    include('sql.php');
    $id = $_REQUEST['productid'];
    $sql = "select * from product where id = '$id' ";
    $result = $mysqli->query($sql);
    if($result->num_rows == 1){
        echo(json_encode($result->fetch_assoc()));
    } else{
        echo("查无此商品");
    }
    $mysqli->close();
?>