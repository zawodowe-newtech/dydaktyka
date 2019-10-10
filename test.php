<!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="author" content="">
		<title></title>
		<style>
			*{margin:0; padding:0;}
		</style>
	</head>
	<body>	 
		<div>
			<?php
				$vector = new \Ds\Vector();
				var_dump($vector->capacity());

				$vector->allocate(100);
				var_dump($vector->capacity());
				 
				$napis1 = 
				"Ala ma kota
				na punkcie kota.";
				$napis2 = "Ala ma psa.";
				
				
				echo nl2br($napis1)."</br>".$napis2;
				echo "<br>";
				for($i=0; $i<15; $i++){
					printf("%'. 5d <br>", $i);
				}
				
			?>
		</div>
	</body>
</html>