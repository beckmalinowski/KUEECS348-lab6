<?php
$size = $_POST['size'];
echo "You entered: " . htmlspecialchars($size);

$i = 0;
echo "<table>";
for ($i = 1; $i <= $size; $i++) {
  echo "<tr>";
  for ($j = 1; $j <= $size; $j++) {
    echo "<th>" . ($i * $j) . "</th>";
  }
  echo "</tr>";
}
echo "</table>";
?>