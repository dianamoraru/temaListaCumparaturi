mysql_connect('localhost', 'root', '');
mysql_select_db('angular1');
$query = "SELECT * FROM produs";
$result = mysql_query($query);