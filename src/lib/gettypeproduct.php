<?php
    include('sql.php');
    $type = $_REQUEST['type'];
    // $type = "数码";
    $sql = "select * from product where type = '$type' ";
    $res = $mysqli->query($sql);
    $arr = array();
    for($i = 1;$i<=$res->num_rows;$i++){
        $row=$res->fetch_assoc();
        array_push($arr,$row);
    }
    echo(json_encode($arr));
?>