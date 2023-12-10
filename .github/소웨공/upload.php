<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["file"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// 파일이 이미 존재하는지 확인
if (file_exists($targetFile)) {
    echo "파일이 이미 존재합니다.";
    $uploadOk = 0;
}

// 파일 사이즈 제한 (10MB)
if ($_FILES["file"]["size"] > 10000000) {
    echo "파일이 너무 큽니다.";
    $uploadOk = 0;
}

// 허용된 파일 형식 확인
if ($imageFileType !== "csv") {
    echo "CSV 파일만 허용됩니다.";
    $uploadOk = 0;
}

// 파일 업로드 실행
if ($uploadOk == 0) {
    echo "파일 업로드에 실패했습니다.";
} else {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo "파일이 성공적으로 업로드되었습니다.";
    } else {
        echo "파일 업로드에 실패했습니다.";
    }
}
?>
