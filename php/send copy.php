<?php

$message = "名前：" . $_POST["name"] . "\n本文：" . $_POST["message"];

if (!mb_send_mail("mail.to.onomichi@gmail.com", $_POST["subject"], $message, "From:
" . $_POST["mail"])) {
exit("error");
}

?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>sample</title>
</head>
<body>
<p>メールが送信されました。</p>
</body>
</html>