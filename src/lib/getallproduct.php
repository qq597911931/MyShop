<?php
    include('sql.php');
    $sql = "select * from product";
    $res = $mysqli->query($sql);
    $arr = array();
    for($i = 1;$i<=$res->num_rows;$i++){
        $row=$res->fetch_assoc();
        array_push($arr,$row);
    }
    echo(json_encode($arr));
?>